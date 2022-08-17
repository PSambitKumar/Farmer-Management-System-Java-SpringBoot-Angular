package com.sambit.Utils;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.Scanner;

public class CommonFileUpload {
    public static final String windowsRootFolder = "C://FarmerRegistrationData//";
    public static final String linuxRootFolder = "/opt/FarmerRegistrationData/";
    public static String operatingSystem = System.getProperty("os.name").toLowerCase().trim();

//    Create Root Directory and Folder Method
    public static String createFolder(String folderName){
        String filePath = "";
        String result= null;
        if (operatingSystem.contains("windows")){
            filePath = windowsRootFolder + folderName;
        }
        else if (operatingSystem.contains("nix") || operatingSystem.contains("nux") || operatingSystem.contains("aix")){
            filePath = linuxRootFolder + folderName;
        }

        //Checking Root Directory is Present or Not
        File file = new File("C://FarmerRegistrationData");
        if (!file.exists()){
            Scanner scanner = new Scanner(System.in);
            char response = scanner.next().charAt(0);
            if (Character.toUpperCase(response) == 'Y'){
                boolean checkCreated = file.mkdir();
                if (checkCreated){
                    File file1 = new File(filePath);
                    if (!file1.exists()){
                        boolean checkCreated1 = file1.mkdir();
                        if (checkCreated1){
                            result = "Success";
                        }
                        else {
                            result = "Failed";
                        }
                    }
                }
            }
            else{
                result = "Failed";
            }
        }
        else{
            File file1 = new File(filePath);
            if (!file1.exists()){
                boolean checkCreated2 = file1.mkdir();
                if (checkCreated2){
                    result = "Success";
                }
                else {
                    result = "Failed";
                }
            }
        }
        return result;
    }


//    Check For Folder Is Exists or Not
    public static String fileExistsOrNot(String folderName){
        String filePath = "";
        String result= null;
        if (operatingSystem.contains("windows")){
            filePath = windowsRootFolder + folderName;
        }
        else if (operatingSystem.contains("nix") || operatingSystem.contains("nux") || operatingSystem.contains("aix")){
            filePath = linuxRootFolder + folderName;
        }

        //Checking Root Directory is Present or Not
        File file = new File("C://FarmerRegistrationData");
        if (!file.exists()){
            Scanner scanner = new Scanner(System.in);
            char response = scanner.next().charAt(0);
            if (Character.toUpperCase(response) == 'Y'){
                boolean checkCreated = file.mkdir();
                if (checkCreated){
                    File file1 = new File(filePath);
                    if (!file1.exists()){
                        boolean checkCreated1 = file1.mkdir();
                        if (checkCreated1){
                            result = "Success";
                            return filePath + "//";
                        }
                        else {
                            result = "Failed";
                            return filePath + "//";
                        }
                    }
                }
            }
            else{
                result = "Failed";
            }
        }
        else{
            File file1 = new File(filePath);
            if (!file1.exists()){
                boolean checkCreated2 = file1.mkdir();
                if (checkCreated2){
                    result = "Success";
                    return filePath + "//";
                }
                else {
                    result = "Failed";
                    return filePath + "//";
                }
            }
        }
        return filePath;
    }

//    Upload Single File into Local Folder
    public static String singleFileUplaod(MultipartFile file, String fileName) throws IOException {
        String fileFlag = "";
        if (file.isEmpty()){
        fileFlag = "FileEmpty";
        }
        else {
            String folderPath = fileExistsOrNot(fileName);
            byte[] bytes =file.getBytes();
            Path path =Paths.get(folderPath + "//" + file.getOriginalFilename());
            Files.write(path, bytes);
            fileFlag = folderPath + "//" + file.getOriginalFilename();
        }
        return fileFlag;
    }
}
