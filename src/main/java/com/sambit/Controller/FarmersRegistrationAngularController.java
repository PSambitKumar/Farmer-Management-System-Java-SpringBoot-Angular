package com.sambit.Controller;

import com.google.gson.Gson;
import com.sambit.Bean.BankDetailsBean;
import com.sambit.Bean.FarmerBean;
import com.sambit.Bean.ResponseBean;
import com.sambit.Model.*;
import com.sambit.Service.MainService;
import com.sambit.Service.MainServiceAngular;
import com.sambit.Utils.CommonFileUpload;
import com.sambit.Utils.RecieveData;
import com.sambit.Validation.AadharValidation;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.ByteArrayResource;
import org.springframework.core.io.Resource;
import org.springframework.core.io.UrlResource;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.client.RestTemplate;
import org.springframework.web.multipart.MultipartFile;

import javax.servlet.http.HttpServletResponse;
import java.io.*;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.sql.Blob;
import java.util.List;
import java.util.Objects;

@Controller
//@CrossOrigin(origins = "*")
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping(value = "/farmer/v1")
public class FarmersRegistrationAngularController {

    @Autowired
    private MainService mainService;
    @Autowired
    private MainServiceAngular mainServiceAngular;

    @ResponseBody
    @GetMapping("/farmerManagement")
    public List<Farmer> farmerRegistrationManagement(){
        System.out.println("Inside FarmerBean Registration Management---------------->>");
//        log.info(mainService.findAllFarmersList().toString());
        return mainService.findAllFarmersList();
    }

    @ResponseBody
    @GetMapping("/relationList")
    public List<Relation> getRelationList(){
        System.out.println("Inside Relation List Method-------------------->>");

        return mainService.findAllRelationList();
    }

    @PostMapping( "/createFarmer")
    public ResponseEntity<ResponseBean> createEmployee(@RequestBody FarmerBean farmerBean){
        System.out.println("Inside Create FarmerBean--------------->>");
        System.out.println(farmerBean);
        Farmer farmer = mainServiceAngular.createFarmer(farmerBean);
        ResponseBean responseBean;
        if (farmer.getId() != 0){
            responseBean = new ResponseBean();
            responseBean.setStatus("Success");
        }else {
            responseBean = new ResponseBean();
            responseBean.setStatus("Fail");
        }
//        Farmer farmer  = mainService.findFarmerById(1);//Just Checking Full Data
        System.out.println(farmer);
        return ResponseEntity.ok(responseBean);
    }


    @ResponseBody
    @GetMapping(value = "/getFarmerList")
    public List<Farmer> getFarmerList(){
        System.out.println("Inside Get Farmers List---------------->>");
        return mainServiceAngular.getFarmerList();
    }


    @GetMapping(value = "/getBankUsingIFSCCode/{ifscCode}")
    public ResponseEntity<BankDetailsBean> getBankUsingIFSCCode(@PathVariable("ifscCode")String ifscCode){
        System.out.println("Inside Get Bank Details Using IFSC Code----------------------->>");
        System.out.println("IFSC Code : " + ifscCode);
        Gson gson = new Gson();
        RestTemplate restTemplate = new RestTemplate();

//        Get Data in Form of String Format
        String bankDetails = restTemplate.getForObject("https://ifsc.razorpay.com/"+ifscCode, String.class);
        System.out.println(bankDetails);

//        Get Data to BankDetailsBean
        BankDetailsBean bankDetailsBean1 = restTemplate.getForObject("https://ifsc.razorpay.com/"+ifscCode, BankDetailsBean.class);
        System.out.println("Bank Details Bean Data : " + bankDetailsBean1);

//        Converting JSON String to ModeL Class
        BankDetailsBean bankDetailsBean = gson.fromJson(bankDetails, BankDetailsBean.class);
        System.out.println("Bank Details are : " + bankDetailsBean);

        String result = RecieveData.data(ResponseEntity.ok(bankDetailsBean));
        System.out.println("Recieved from Received Data : " + result);

        return ResponseEntity.ok(bankDetailsBean);
    }

    @GetMapping(value = "/getValidateAadhar/{aadharId}")
    public ResponseEntity<ResponseBean> getValidateAadhar(@PathVariable("aadharId")String aadharId, ResponseBean responseBean){
        System.out.println("Inside Get Validate Aadhar Id--------------->>");
        System.out.println(aadharId);
        if (AadharValidation.validateAadhar(aadharId)){
            responseBean.setStatus("Success");
        }else {
            responseBean.setStatus("Failed");
        }
        return ResponseEntity.ok(responseBean);
    }

    @GetMapping(value = "/deleteFarmer/{id}")
    public ResponseEntity<ResponseBean> deleteFarmer(@PathVariable(value = "id", required = false)int id){
        System.out.println("Inside Delete Farmer Method---------------->>");
        System.out.println("Farmer ID : " + id);
        ResponseBean responseBean = null;
        try {
            String response  = mainServiceAngular.deleteFarmerById(id);
            responseBean = new ResponseBean();
            responseBean.setStatus(response);
        } catch (Exception e) {
            throw new RuntimeException(e);
        }
        return ResponseEntity.ok(responseBean);
    }

    @GetMapping(value = "/editFarmerById/{id}")
    public ResponseEntity<Farmer> editFarmerById(@PathVariable(value = "id", required = false)int id){
        System.out.println("Inside Edit Farmer Method--------------->>");
        System.out.println("Farmer Id : " + id);
        Farmer farmer = mainServiceAngular.getFarmerById(id);
        return ResponseEntity.ok(farmer);
    }

    @PostMapping(value = "saveRelationUsingFarmerId/{farmerId}")
    public ResponseEntity<ResponseBean> saveRelationUsingFarmerId(@PathVariable("farmerId")int farmerId, @RequestBody Relation relation, ResponseBean responseBean){
        System.out.println("Inside Save Relation-------------->>");
        System.out.println("Farmer Id : " + farmerId + ",\n Relation Data : " + relation);
        Farmer farmer = mainServiceAngular.saveRelationUsingFarmerId(farmerId, relation);
        if (farmer.getId() == farmerId){
            responseBean.setStatus("Success");
        }else {
            responseBean.setStatus("Fail");
        }
        return ResponseEntity.ok(responseBean);
    }

//    Recieving Data From Angular to Controller Using RequestParam
    @RequestMapping(value = "/dentists", method = RequestMethod.GET)
   public ResponseEntity<ResponseBean> search(@RequestParam("name") String name,
   @RequestParam("city") String city,
   @RequestParam("type") String type,
   @RequestParam("rating") String rating) {
        ResponseBean responseBean = new ResponseBean();
   return ResponseEntity.ok(responseBean);
 }

// Create Farmer Image Working 1
//    @PostMapping(value = "/createFarmerImage")
//    public String createFarmerImage(@RequestParam(value = "imageData", required = false)MultipartFile imageData){
//        System.out.println("Inside Create Farmer Image---------->>");
//        System.out.println("Farmer Image Object : " + imageData);
//        System.out.println("Farmer Image Name : " + imageData.getOriginalFilename());
//        return null;
//    }

    // Create Farmer Image Working 2
//    @PostMapping(value = "/createFarmerImage")
//    public String createFarmerImage(@PathVariable(value = "imageData", required = false)MultipartFile imageData, @RequestBody FarmerImageBean farmerImageBean){
//        System.out.println("Inside Create Farmer Image---------->>");
//        System.out.println("Farmer Data : " + farmerImageBean);
//        return null;
//    }

    // Create Farmer Image Working 3
    @PostMapping(value = "/createFarmerImage")
    public ResponseEntity<ResponseBean> createFarmerImage(@RequestParam(value = "name", required = false)String name,
                                    @RequestParam(value = "image", required = false)String imagePath,
                                    @RequestParam(value = "imageData", required = false)MultipartFile imageData,
                                    FarmerImage farmerImage, ResponseBean responseBean) throws IOException {//can also recieve data using bean
        System.out.println("Inside Create Farmer Image---------->>");
        System.out.println("Farmer Image Object : " + imageData);
        System.out.println("Farmer Image Name : " + imageData.getOriginalFilename());
        System.out.println("Farmer Data : " + name + ", Image Path From Farmer Local Computer : " + imagePath);
        String fileUploadPath = CommonFileUpload.singleFileUplaod(imageData, "farmerImage");
        System.out.println("Image Uploaded in Path : " + fileUploadPath);
        farmerImage.setName(name);
        farmerImage.setFarmerImagePath(fileUploadPath);
        FarmerImage updatedFarmerImage = mainServiceAngular.createFarmerImage(farmerImage);
        if (updatedFarmerImage.getId() > 0){
            System.out.println("Data Inserted to The Database Successfully.");
            System.out.println("Updated Farmer Image Data : " + updatedFarmerImage);
            responseBean.setStatus("Success");
        }else {
            System.out.println("Failed to Insert Data into Database!");
            responseBean.setStatus("Failed");
        }
        return ResponseEntity.ok(responseBean);
    }

    @ResponseBody
    @GetMapping(value = "/getFarmerImageList")
    public List<FarmerImage> getFarmerImageList(){
        System.out.println("Inside Get Farmer Image List---------->>");
        List<FarmerImage> farmerImageList = mainServiceAngular.getFarmerImageList();
        farmerImageList.forEach(System.out::println);
        return mainServiceAngular.getFarmerImageList();
    }

    @GetMapping(value = "/getAadharIdUsingFarmerId/{id}")
    public ResponseEntity<ResponseBean> getAadharIdByFarmerId(@PathVariable(value = "id")int id, ResponseBean responseBean){
        System.out.println("Inside Get Aadhar Id Using Farmer Id---------->>");
        System.out.println("Farmer Id : " + id);
        Farmer farmer = mainServiceAngular.getAadharIdByFarmerId(id);
        System.out.println("Farmer Data : " + farmer);
        if (farmer != null){
            System.out.println("Farmer Data is Not Null.");
            if (farmer.getAadhar() != null && farmer.getAadhar().getAadharId() != null) {
                System.out.println("Farmer Aadhar Id is Present.");
                responseBean.setStatus(farmer.getAadhar().getAadharId());
            }else
                responseBean.setStatus("Absent");
        }else {
            System.out.println("Farmer Data is Absent/Null");
        }
        return ResponseEntity.ok(responseBean);
    }

    @ResponseBody
     @PostMapping(value = "/saveFarmerAadharDocument/{aadharId}")
    public ResponseEntity<ResponseBean> saveFarmerAadharDocument(@PathVariable("aadharId")String aadharId,
                                                                 @RequestParam(value = "aadharDocument", required = false)MultipartFile aadharDocument,
                                                                 ResponseBean responseBean) throws IOException {
        String path = "";
        System.out.println("Inside Save Farmer Aadhar Document---------->>");
        System.out.println("Aadhar Id : " + aadharId);
        System.out.println("Aadhar Document : " + aadharDocument);
        System.out.println("Aadhar Document Name : " + aadharDocument.getOriginalFilename());

        Objects.requireNonNull(aadharDocument.getOriginalFilename()).replace(aadharDocument.getOriginalFilename(), "FM-" + 1 + "-" + aadharId + ".pdf");
        System.out.println("Aadhar Document Name After Replacing : " + aadharDocument.getOriginalFilename());

        path = CommonFileUpload.dynamicFileUpload(aadharDocument, aadharId.toString(), 1, "aadharDocument");
        System.out.println("Aadhar Document Uploaded in Path : " + path);

//        path = path.replace("C://FarmerRegistrationData//", "");
//        System.out.println("Aadhar Document Path After Replacing : " + path);

        AadharDocument aadharDocument1 = new AadharDocument();
        aadharDocument1.setAadharDocPath(path);
        aadharDocument1 = mainServiceAngular.saveAadharDocument(aadharDocument1);


            if (!path.equals(""))
                responseBean.setStatus(Integer.toString(aadharDocument1.getAadharDocId()));
            else
                responseBean.setStatus("Failed");

        System.out.println("Response Bean : " + responseBean);
        return ResponseEntity.ok(responseBean);
    }

//    Working
//    Single File Download Using Path Method 1
    @ResponseBody
    @GetMapping(value = "/downloadFile/{aadharDocPathId}")
    public ResponseEntity<ResponseBean> downloadFile(@PathVariable(value = "aadharDocPathId", required = false)String aadharDocPathId,
                               HttpServletResponse response, ResponseBean responseBean) throws IOException {
        System.out.println("Inside Download File---------->>");
        System.out.println("Aadhar Document Path Id : " + aadharDocPathId);
        AadharDocument aadharDocument = mainServiceAngular.getAadharDocumentByAadharDocId(Integer.parseInt(aadharDocPathId));
        System.out.println("Aadhar Document Data : " + aadharDocument);
        CommonFileUpload.downloadFileUsingCompletePath(response, aadharDocument.getAadharDocPath());

        responseBean.setStatus("Success");
        return ResponseEntity.ok(responseBean);
    }

//    Working
//    Single File Download Using Path Method 2
    @GetMapping(value = "/downloadFile1/{aadharDocPathId}")
    public ResponseEntity<Resource> downloadFile1(@PathVariable(value = "aadharDocPathId", required = false)String aadharDocPathId,
                                                     HttpServletResponse response, ResponseBean responseBean) throws IOException {
        System.out.println("Inside Download File---------->>");
        System.out.println("Aadhar Document Path Id : " + aadharDocPathId);
        AadharDocument aadharDocument = mainServiceAngular.getAadharDocumentByAadharDocId(Integer.parseInt(aadharDocPathId));
        System.out.println("Aadhar Document Data : " + aadharDocument);

        Path file = Paths.get(aadharDocument.getAadharDocPath());
        Resource resource = new UrlResource(file.toUri());

        System.out.println("Resource : " + resource);
        System.out.println("Resource File : " + resource.getFile());
        System.out.println("Resource File Name : " + resource.getFilename());
        System.out.println("Resource File Description : " + resource.getDescription());


        return ResponseEntity.ok()
                .contentType(MediaType.parseMediaType("application/pdf"))
                .header(HttpHeaders.CONTENT_DISPOSITION, "attachment; filename=\"" + resource.getFilename() + "\"")
                .body(resource);
    }


//    Working
//    Single File Download Method 3
    @GetMapping(value = "/downloadFile2/{aadharDocPathId}")
    public ResponseEntity<ByteArrayResource> downloadFile2(@PathVariable(value = "aadharDocPathId", required = false)String aadharDocPathId) throws IOException {
        System.out.println("Inside Download File 2---------->>");
        AadharDocument aadharDocument = mainServiceAngular.getAadharDocumentByAadharDocId(Integer.parseInt("5"));
        System.out.println("Aadhar Document : " + aadharDocument);
        System.out.println("File Path : " + aadharDocument.getAadharDocPath());

        Path path = Paths.get(aadharDocument.getAadharDocPath());
        System.out.println("Bytes : " + Files.readAllBytes(path));

        return ResponseEntity.ok()
                .contentType(MediaType.parseMediaType("application/pdf"))
                .header("Content-Disposition", "attachment;filename=" + path.toFile().getName())
                .body(new ByteArrayResource(Files.readAllBytes(path)));
    }


    @ResponseBody
    @GetMapping(value = "/downloadFileData")
    public ResponseEntity<byte[]> DownloadFileData() throws IOException {
        System.out.println("Inside Download File Data---------->>");
        AadharDocument aadharDocument = mainServiceAngular.getAadharDocumentByAadharDocId(Integer.parseInt("7"));
        System.out.println("Aadhar Document : " + aadharDocument);
        System.out.println("File Path : " + aadharDocument.getAadharDocPath());

        Path path = Paths.get(aadharDocument.getAadharDocPath());
        System.out.println("Bytes : " + Files.readAllBytes(path));

        return ResponseEntity.ok(Files.readAllBytes(path));
    }



}
