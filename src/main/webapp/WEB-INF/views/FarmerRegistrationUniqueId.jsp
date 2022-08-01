<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <%@ taglib prefix = "c" uri = "http://java.sun.com/jsp/jstl/core" %>
    <%@ taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt" %>
    <%@ taglib prefix="form" uri="http://www.springframework.org/tags/form" %>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.css"
          integrity="sha512-5A8nwdMOWrSz20fDsjczgUidUBR8liPYU+WymTZP1lmY9G6Oc7HlZv156XqnsgNUzTyMefFTcsFH/tnJE/+xBg=="
          crossorigin="anonymous" referrerpolicy="no-referrer" />

    <%--    Bootstrap for Design--%>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
    <%--    For Validation--%>
    <script type="text/javascript" src="http://code.jquery.com/jquery-1.10.2.js"></script>
    <script src="http://maxcdn.bootstrapcdn.com/bootstrap/5.1.3/js/bootstrap.min.js"></script>
    <link rel="stylesheet" href="http://cdnjs.cloudflare.com/ajax/libs/jquery.bootstrapvalidator/0.5.3/css/bootstrapValidator.min.css"/>
    <script type="text/javascript" src="http://cdnjs.cloudflare.com/ajax/libs/jquery.bootstrapvalidator/0.5.3/js/bootstrapValidator.min.js"> </script>
    <title>FarmerBean Registration</title>
</head>
<body style="background-color: #f2f2f2; font-family: 'Yu Gothic UI Semibold'">


<h4 class="text-center" style="margin-top: 1rem; color: green">FarmerBean Registration Using Unique ID</h4>

<form action="/searchFarmer" method="post" modeAttribute="farmer" id="farmerRegistrationForm">

    <div class="row" style="margin: 3rem;">

        <c:choose>
            <c:when test="${adhar == 'Adhaar Id'}">
                <div class="col-md-3">
                    <label for="uniqueId" class="form-label">Unique ID</label>
                    <select class="form-select" aria-label="Default select example" style="background-color: #f2f2f2" id="uniqueId" name="uniqueId">
                        <option value="Select">Select</option>
                        <option value="Ack Id">Ack Id</option>
                        <option value="Janadhaar Id">Janadhaar Id</option>
                        <option value="Adhaar Id" selected  >Adhaar Id</option>
                    </select>
                </div>
            </c:when>

<%--            <c:when test="${flashMessage == 'Failed'}">--%>
<%--                <script>swal("Failed", "Failed To Add Drive!", "error")</script>--%>
<%--            </c:when>--%>

            <c:otherwise>
                <div class="col-md-3">
                    <label for="uniqueId" class="form-label">Unique ID</label>
                    <select class="form-select" aria-label="Default select example" style="background-color: #f2f2f2" id="uniqueId" name="uniqueId">
                        <option value="Select" selected>Select</option>
                        <option value="Ack Id">Ack Id</option>
                        <option value="Janadhaar Id">Janadhaar Id</option>
                        <option value="Adhaar Id">Adhaar Id</option>
                    </select>
                </div>
            </c:otherwise>
        </c:choose>

        <div class="col-md-3" id="id1">
            <label for="ackId" class="form-label">Acknowledge ID</label>
            <input type="text" class="form-control" id="ackId" style="background-color: #f2f2f2" name="ackId" placeholder="Enter Acknowledge ID" required>
        </div>
        <div class="col-md-3" id="id2">
            <label for="janadhaarId" class="form-label">Janadhaar ID</label>
            <input type="text" class="form-control" id="janadhaarId" style="background-color: #f2f2f2" name="janadhaarId" placeholder="Enter Janadhaar ID" required>
        </div>

        <c:choose>
            <c:when test="${adharId != null}">
                <div class="col-md-3">
                <label class="form-label">Adhaar ID</label>
                <input type="text" class="form-control" style="background-color: #f2f2f2"  value="${adharId}">
                </div>
            </c:when>

            <c:otherwise>
                <div class="col-md-3" id="id3">
                    <label for="adhaarId" class="form-label">Adhaar ID</label>
                    <input type="text" class="form-control" id="adhaarId" style="background-color: #f2f2f2" name="adhaarId" onblur="validateAadhar(this.value)" value="${adharId}" placeholder="Enter Adhaar ID" required>
                </div>
            </c:otherwise>
        </c:choose>


        <div class="col-md-3" style="margin-top: 2rem;">
            <button type="button" onclick="submitFarmerForm()" class="btn btn-success">Search</button>
            <button type="button" onclick="reloadPage()" class="btn btn-warning">Reset</button>
        </div>
    </div>

</form>

<c:choose>
    <c:when test="${data == 'Data'}">
        <h5 style="margin-left: 3rem; margin-right: 3rem; color: green" class="card-title">Family Details</h5>
        <div class="row">
            <div class="col-md-1" style="width: 6.333333%">
                <h6 style="margin-left: 3rem; margin-right: 3rem; color: black" class="card-title">Note:</h6>
            </div>
            <div class="col-md-11">
                <small class="text-danger">Please Select Husband Wife and minor dill fon Laghu and Seeman Krishak Family </small>
            </div>
        </div>
        <div class="row" style="margin-left: 3rem; margin-right: 3rem;">
            <form id="allFamilyDetails" action="" method="" modelAttribue="">
                <table id="dynamicTable" border = "1" align="center" class="table" cellspacing="0">
                    <thead>
                    <tr style="background-color: #f2f2f2">
                        <td scope="col"><input type="checkbox"></td>
                        <th scope="col">Name</th>
                        <th scope="col"> Father's Name</th>
                        <th scope="col">Age</th>
                        <th scope="col">Gender</th>
                        <th scope="col">Relation</th>
                        <th scope="col">Bank Name</th>
                        <th scope="col">IFSC Code</th>
                        <th scope="col">Account Number</th>
                        <th scope="col">Mobile Number</th>
                        <th scope="col">Add Relation</th>
                    </tr>
                    </thead>

                    <tbody style="background-color: #f2f2f2" id="tableBody">
                    <tr style="background-color: #f2f2f2; padding: 5px">
                        <td><input type="checkbox"></td>
                        <td>${farmer.name}</td>
                        <td>${farmer.fathersName}</td>
                        <td>${farmer.age}</td>
                        <td>${farmer.gender}</td>
                        <td>${farmer.relation}</td>
                        <td>${farmer.bank.bankName}</td>
                        <td>${farmer.bank.ifscCode}</td>
                        <td>${farmer.bank.accountNumber}</td>
                        <td>${farmer.mobile}</td>
                        <td><select class="form-select" style="background-color: #f2f2f2" id="addrelation" name="addrelation">
                            <option value="Select" selected>Add Relation</option>
                            <option value="Brother">Brother</option>
                            <option value="Sister">Sister</option>
                        </select></td>
                    </tr>

                    <c:forEach items="${farmer.relationList}" var="relationList">
                        <tr>
                            <td><input type="checkbox"></td>
                            <td>${relationList.name}</td>
                            <td>${relationList.fathersName}</td>
                            <td>${relationList.age}</td>
                            <td>${relationList.gender}</td>
                            <td>${relationList.relationName}</td>
                            <td>${relationList.bank.bankName}</td>
                            <td>${relationList.bank.ifscCode}</td>
                            <td>${relationList.bank.accountNumber}</td>
                            <td>${relationList.bank.mobileNumber}</td>
                            <td><select class="form-select" style="background-color: #f2f2f2" id="addrelation1" name="addrelation1" disabled>
                                <option value="Select" selected>Add Relation</option>
                                <option value="Brother">Brother</option>
                                <option value="Sister">Sister</option>
                            </select></td>
                        </tr>
                    </c:forEach>
                    </tbody>
                </table>

            </form>
            <div class="text-center">
                <button class="btn btn-primary" <%--onclick="window.location.href='${pageContext.request.contextPath}/selectFamilyMember'"--%> onclick="submitAllFamilyData()">Select Family Member</button>
            </div>

        </div>
    </c:when>


<%--    <c:when test="${flashMessage == 'Failed'}">--%>
<%--        <script>swal("Failed", "Failed To Add Drive!", "error")</script>--%>
<%--    </c:when>--%>
<%--        <c:otherwise>--%>
<%--            <p>No Data!</p>--%>
<%--        </c:otherwise>--%>
</c:choose>






<%--Add Brother Form--%>
<fieldset id="brother" style="margin: 3rem;" class="form-group border p-3">
    <legend style="color: green; font-size: 26px" class="w-auto px-2">Brother's Details</legend>
    <form action="/saveBrother" method="get" modeAttribute="brother" id="brotherDetailForm">
        <div class="row" style="margin: 3rem;" >
            <div class="col-md-3">
                <label for="name" class="form-label">Brother Name</label>
                <input type="text" class="form-control" id="name" name="name" style="background-color: #f2f2f2" placeholder="Enter Brother's Name" required>
            </div>
            <div class="col-md-3">
                <label for="fathersName" class="form-label">Father's Name</label>
                <input type="text" class="form-control" id="fathersName" name="fathersName" style="background-color: #f2f2f2" placeholder="Enter Father's Name" required>
            </div>
            <div class="col-md-3">
                <label for="age" class="form-label">Age</label>
                <input type="number" class="form-control" id="age" name="age" style="background-color: #f2f2f2" placeholder="Enter Age" required>
            </div>
            <div class="col-md-3">
                <label class="form-label">Gender</label>
                <div>
                    <div class="form-check form-check-inline">
                        <input class="form-check-input" type="radio" id="male" name="gender" style="background-color: #f2f2f2" value="male" checked>
                        <label class="form-check-label" for="male">Male</label>
                    </div>
                </div>
            </div>
        </div>

        <div class="row" style="margin: 3rem;">
            <div class="col-md-3">
                <label for="relation" class="form-label">Relation</label>
                <select class="form-select" aria-label="Default select example" style="background-color: #f2f2f2" id="relation" name="relation">
                    <option selected value="Brother">Brother</option>
                </select>
            </div>
            <div class="col-md-3">
                <label for="bankName" class="form-label">Bank Name</label>
                <select class="form-select" aria-label="Default select example" style="background-color: #f2f2f2" id="bankName" name="bankName">
                    <option selected>Select</option>
                    <option value="State Bank of India">State Bank of India</option>
                    <option value="Bank of Baroda">Bank of Baroda</option>
                    <option value="Axis Bank">Axis Bank</option>
                    <option value="Uco Bank">Uco Bank</option>
                    <option value="HDFC Bank">HDFC Bank</option>
                </select>
            </div>
            <div class="col-md-3">
                <label for="ifscCode" class="form-label">IFSC Code</label>
                <input type="text" class="form-control" id="ifscCode" style="background-color: #f2f2f2" name="ifscCode" placeholder="Enter IFSC Code" required>
            </div>
            <div class="col-md-3">
                <label for="accountNumber" class="form-label">Account Number</label>
                <input type="text" class="form-control" id="accountNumber" style="background-color: #f2f2f2" name="accountNumber" placeholder="Enter  Account Number" required>
            </div>
        </div>

        <div class="row" style="margin: 3rem;">
            <div class="col-md-3">
                <label for="mobile" class="form-label">Mobile Number</label>
                <input type="text" class="form-control" id="mobile" style="background-color: #f2f2f2" name="mobile" placeholder="Enter Mobile Number" required>
            </div>
            <div class="col-md-3">
                <label for="uniqueId" class="form-label">Unique ID</label>
                <select class="form-select" aria-label="Default select example" style="background-color: #f2f2f2" id="uniqueId1" name="uniqueId">
                    <option selected>Select</option>
                    <option value="Ack Id">Ack Id</option>
                    <option value="Janadhaar Id">Janadhaar Id</option>
                    <option value="Adhaar Id">Adhaar Id</option>
                </select>
            </div>
            <div class="col-md-3" id="id11">
                <label for="ackId" class="form-label">Acknowledge ID</label>
                <input type="text" class="form-control"  style="background-color: #f2f2f2" name="ackId" placeholder="Enter Acknowledge ID" required>
            </div>
            <div class="col-md-3" id="id12">
                <label for="janadhaarId" class="form-label">Janadhaar ID</label>
                <input type="text" class="form-control"  style="background-color: #f2f2f2" name="janadhaarId" placeholder="Enter Janadhaar ID" required>
            </div>
            <div class="col-md-3" id="id13">
                <label for="adhaarId" class="form-label">Adhaar ID</label>
                <input type="text" class="form-control"style="background-color: #f2f2f2" name="adhaarId" placeholder="Enter Adhaar ID" required>
            </div>

        </div>
        <input type="hidden" name="fId" value="${farmer.id}">


        <div class="row" style="margin: 3rem;">
            <div class="col-md-3">
                <button type="button" onclick="submitBrotherForm()" class="btn btn-success">Submit</button>
                <button type="reset" class="btn btn-warning">Reset</button>
            </div>
        </div>
    </form>
</fieldset>

<%--Add Sister's Form--%>
<fieldset id="sister" style="margin: 3rem;" class="form-group border p-3">
    <legend style="color: green; font-size: 26px" class="w-auto px-2">Sister's Details</legend>
    <form action="/saveSister" method="post" modeAttribute="sister" id="sisterDetailForm">
        <div class="row" style="margin: 3rem;" >
            <div class="col-md-3">
                <label for="name" class="form-label">Sister Name</label>
                <input type="text" class="form-control" id="sname" name="name" style="background-color: #f2f2f2" placeholder="Enter Sister's Name" required>
            </div>
            <div class="col-md-3">
                <label for="fathersName" class="form-label">Father's Name</label>
                <input type="text" class="form-control" id="sfathersName" name="fathersName" style="background-color: #f2f2f2" placeholder="Enter Father's Name" required>
            </div>
            <div class="col-md-3">
                <label for="age" class="form-label">Age</label>
                <input type="number" class="form-control" id="sage" name="age" style="background-color: #f2f2f2" placeholder="Enter Age" required>
            </div>
            <div class="col-md-3">
                <label class="form-label">Gender</label>
                <div>
                    <div class="form-check form-check-inline">
                        <input class="form-check-input" type="radio" id="female" name="gender" style="background-color: #f2f2f2" value="female" checked>
                        <label class="form-check-label" for="female">Female</label>
                    </div>
                </div>
            </div>
        </div>

        <div class="row" style="margin: 3rem;">
            <div class="col-md-3">
                <label for="relation" class="form-label">Relation</label>
                <select class="form-select" aria-label="Default select example" style="background-color: #f2f2f2" id="srelation" name="relation" disabled>
                    <option selected value="Sister" disabled>Sister</option>
                </select>
            </div>
            <div class="col-md-3">
                <label for="bankName" class="form-label">Bank Name</label>
                <select class="form-select" aria-label="Default select example" style="background-color: #f2f2f2" id="sbankName" name="bankName">
                    <option selected>Select</option>
                    <option value="State Bank of India">State Bank of India</option>
                    <option value="Bank of Baroda">Bank of Baroda</option>
                    <option value="Axis Bank">Axis Bank</option>
                    <option value="Uco Bank">Uco Bank</option>
                    <option value="HDFC Bank">HDFC Bank</option>
                </select>
            </div>
            <div class="col-md-3">
                <label for="ifscCode" class="form-label">IFSC Code</label>
                <input type="text" class="form-control" id="sifscCode" style="background-color: #f2f2f2" name="ifscCode" placeholder="Enter IFSC Code" required>
            </div>
            <div class="col-md-3">
                <label for="accountNumber" class="form-label">Account Number</label>
                <input type="text" class="form-control" id="saccountNumber" style="background-color: #f2f2f2" name="accountNumber" placeholder="Enter  Account Number" required>
            </div>
        </div>

        <div class="row" style="margin: 3rem;">
            <div class="col-md-3">
                <label for="mobile" class="form-label">Mobile Number</label>
                <input type="text" class="form-control" id="smobile" style="background-color: #f2f2f2" name="mobile" placeholder="Enter Mobile Number" required>
            </div>
            <div class="col-md-3">
                <label for="uniqueId" class="form-label">Unique ID</label>
                <select class="form-select" aria-label="Default select example" style="background-color: #f2f2f2" id="uniqueId2" name="uniqueId">
                    <option selected>Select</option>
                    <option value="Ack Id">Ack Id</option>
                    <option value="Janadhaar Id">Janadhaar Id</option>
                    <option value="Adhaar Id">Adhaar Id</option>
                </select>
            </div>
            <div class="col-md-3" id="id21">
                <label for="ackId" class="form-label">Acknowledge ID</label>
                <input type="text" class="form-control"  style="background-color: #f2f2f2" name="ackId" placeholder="Enter Acknowledge ID" required>
            </div>
            <div class="col-md-3" id="id22">
                <label for="janadhaarId" class="form-label">Janadhaar ID</label>
                <input type="text" class="form-control"  style="background-color: #f2f2f2" name="janadhaarId" placeholder="Enter Janadhaar ID" required>
            </div>
            <div class="col-md-3" id="id23">
                <label for="adhaarId" class="form-label">Adhaar ID</label>
                <input type="text" class="form-control"style="background-color: #f2f2f2" name="adhaarId" placeholder="Enter Adhaar ID" required>
            </div>

        </div>


        <div class="row" style="margin: 3rem;">
            <div class="col-md-3">
                <button type="button" onclick="submitFarmerForm()" class="btn btn-success">Submit</button>
                <button type="reset" class="btn btn-warning">Reset</button>
            </div>
        </div>
    </form>
</fieldset>




<%--On Submit of Family Details--%>
<div style="margin-left: 3rem; margin-right: 3rem;" id="farmerFamilyDetails">
    <h5 style="/*margin-left: 3rem; margin-right: 3rem; */color: green" class="card-title">FarmerBean's Family Details</h5>
    <table id="dynamicTable1" border = "1" align="center" class="table" cellspacing="0">
        <thead>
        <tr style="background-color: #f2f2f2">
            <th scope="col">Name</th>
            <th scope="col"> Father's Name</th>
            <th scope="col">Age</th>
            <th scope="col">Gender</th>
            <th scope="col">Relation</th>
            <th scope="col">Bank Name</th>
            <th scope="col">IFSC Code</th>
            <th scope="col">Account Number</th>
            <th scope="col">Mobile Number</th>
        </tr>
        </thead>

        <tbody style="background-color: #f2f2f2" id="tableBody1">
        <tr style="background-color: #f2f2f2; padding: 5px">
            <td>${farmer.name}</td>
            <td>${farmer.fathersName}</td>
            <td>${farmer.age}</td>
            <td>${farmer.gender}</td>
            <td>${farmer.relation}</td>
            <td>${farmer.bank.bankName}</td>
            <td>${farmer.bank.ifscCode}</td>
            <td>${farmer.bank.accountNumber}</td>
            <td>${farmer.mobile}</td>
        </tr>

        <c:forEach items="${farmer.relationList}" var="relationList">
            <tr>
                <td>${relationList.name}</td>
                <td>${relationList.fathersName}</td>
                <td>${relationList.age}</td>
                <td>${relationList.gender}</td>
                <td>${relationList.relationName}</td>
                <td><input type="text" value="${relationList.bank.bankName}" style="background-color: #f2f2f2; border-color: azure; height: 27px;"></td>
                <td><input type="text" value="${relationList.bank.ifscCode}" style="background-color: #f2f2f2; border-color: azure; height: 27px;"></td>
                <td><input type="text" value="${relationList.bank.accountNumber}" style="background-color: #f2f2f2; border-color: azure; height: 27px;"></td>
                <td><input type="text" value="${relationList.bank.mobileNumber}" style="background-color: #f2f2f2; border-color: azure; height: 27px;"></td>
            </tr>
        </c:forEach>
        </tbody>
    </table>

    <%--Add Land Details--%>

    <fieldset class="form-group border p-3">
        <legend style="color: green; font-size: 18px" class="w-auto px-2">Land Details</legend>
        <div  class="addMoreBox"><div class="row" style="background-color: #f2f2f2" style="margin-top: 16px">
            <div  class="col-md-6 col-lg-4 col-xl-3 form-group" style="margin-top: 16px">
                <label  class="control-label">Member <span  class="text-danger">*</span></label>
                <select  class="form-control" style="background-color: #f2f2f2">
                    <option >Select</option><option >Shamsher</option>
                    <option >Sajida Bano</option>
                </select>
            </div>

            <div  class="col-md-6 col-lg-4 col-xl-3 form-group" style="margin-top: 22px">
                <label  class="control-label">District </label>
                <select  class="form-control" style="background-color: #f2f2f2">
                    <option >Select</option><option >Ajmer</option>
                    <option >Almar</option><option >Baran</option>
                </select>
            </div>
            <div  class="col-md-6 col-lg-4 col-xl-3 form-group" style="margin-top: 22px">
                <label  class="control-label">Tehsil </label>
                <select  class="form-control" style="background-color: #f2f2f2">
                    <option >Select</option>
                    <option >Ajmer</option>
                    <option >Almar</option>
                    <option >Baran</option>
                </select>
            </div>
            <div  class="col-md-6 col-lg-4 col-xl-3 form-group" style="margin-top: 22px">
                <label  class="control-label">Village Patwar -ILR </label>
                <select  class="form-control" style="background-color: #f2f2f2">
                    <option >Select</option>
                    <option >Ajmer</option>
                    <option >Almar</option>
                    <option >Baran</option>
                </select>
            </div>
            <div  class="col-md-6 col-lg-4 col-xl-3 form-group" style="margin-top: 22px">
                <label  class="control-label">Khata Number </label>
                <div  class="input-group">
                    <input  class="form-control" id="kno" type="search" style="background-color: #f2f2f2">
                    <div  class="input-group-append">
                        <button  class="input-group-text" data-target="#landd" data-toggle="modal" for="rdate"><i  aria-hidden="true" class="fa fa-search" style="margin-top: 8px"></i></button>
                    </div>
                </div>
            </div>
            <div  class="col-md-6 col-lg-4 col-xl-3 form-group" style="margin-top: 22px">
                <label  class="control-label">Land Owner / Father / Husband </label>
                <input  class="form-control" type="text" style="background-color: #f2f2f2">
            </div>
            <div  class="col-md-6 col-lg-4 col-xl-3 form-group" style="margin-top: 22px">
                <label  class="control-label">Total Land in Khata (In Hectare)</label>
                <input  class="form-control" type="text" style="background-color: #f2f2f2">
            </div>
            <div  class="col-md-6 col-lg-4 col-xl-3 form-group" style="margin-top: 22px">
                <label  class="control-label">Land Share (In Hectare)</label>
                <input  class="form-control" type="text" style="background-color: #f2f2f2">
            </div>
        </div>
    </div>
    </fieldset>

    <div class="col-sm-12 row" style="margin-top: 25px">
        <div class="col-sm-11 ">
        </div>
        <div class="col-sm-1">
            <a class="addIcon bg-success text-#f2f2f2"  href="javascript:;" title="Add"><i  class="fa fa-plus" style="width: 17px;margin-left: 5px ;"></i></a></div>
           </div>
    </div>












<script>

    $(document).ready(function (){
        $('#id1').hide();
        $('#id2').hide();
        $('#id3').hide();
        $('#brother').hide();
        $('#sister').hide();
        $('#farmerFamilyDetails').hide();

    });


    $( "#uniqueId" ).change(function() {
        if (this.value == "Ack Id"){
            $('#id1').show();
            $('#id2').hide();
            $('#id3').hide();
        }
        else if (this.value == "Janadhaar Id"){
            $('#id1').hide();
            $('#id2').show();
            $('#id3').hide();
        }
        else if (this.value == "Adhaar Id"){
            $('#id1').hide();
            $('#id2').hide();
            $('#id3').show();
        }
        else if (this.value == "Select"){
            $('#id1').hide();
            $('#id2').hide();
            $('#id3').hide();
        }
    });

    function submitFarmerForm(){
        $('#farmerRegistrationForm').submit();
        $('#dynamicTable').show();
    }

    function reloadPage(){
        window.location.reload();
    }
</script>

<script>
    $(document).ready(function (){
        $('#id11').hide();
        $('#id12').hide();
        $('#id13').hide();

        $('#id21').hide();
        $('#id22').hide();
        $('#id23').hide();
    })

    $( "#uniqueId1" ).change(function() {
        if (this.value == "Ack Id"){
            $('#id11').show();
            $('#id12').hide();
            $('#id13').hide();
        }
        else if (this.value == "Janadhaar Id"){
            $('#id11').hide();
            $('#id12').show();
            $('#id13').hide();
        }
        else if (this.value == "Adhaar Id"){
            $('#id11').hide();
            $('#id12').hide();
            $('#id13').show();
        }
        else if (this.value == "Select"){
            $('#id11').hide();
            $('#id12').hide();
            $('#id13').hide();
        }
    });

    $( "#addrelation" ).change(function() {
        var fId = ${farmer.id};
        console.log(fId)
        if (this.value == "Brother"){
            // addRelation(fId, this.value);
            $('#brother').show();
            $('#sister').hide();
        }
        else if (this.value == "Sister"){
            // addRelation(fId, this.value);
            $('#sister').show();
            $('#brother').hide();
        }
    });

    $( "#uniqueId2" ).change(function() {
        if (this.value == "Ack Id"){
            $('#id21').show();
            $('#id22').hide();
            $('#id23').hide();
        }
        else if (this.value == "Janadhaar Id"){
            $('#id21').hide();
            $('#id22').show();
            $('#id23').hide();
        }
        else if (this.value == "Adhaar Id"){
            $('#id21').hide();
            $('#id22').hide();
            $('#id23').show();
        }
        else if (this.value == "Select"){
            $('#id1').hide();
            $('#id2').hide();
            $('#id3').hide();
        }
    });

    // function addRelation(fId,relation){
    //     $.ajax({
    //         url: "/addRelation",
    //         method : "GET",
    //         data : {
    //             "fid" : fId,
    //             "relation" : relation
    //         },
    //         success : function (data){
    //             console.log(data);
    //         },
    //         error : function (error){
    //             console.log("Failed.")
    //             console.log(error);
    //         }
    //     });
    // }

    function submitBrotherForm(){
        console.log("Inside SubmitBrotherForm");
        var fId = ${farmer.id};
        var frm = $('#brotherDetailForm');
        var html = '';
        $.ajax({
            url : "/saveBrother",
            type : "GET",
            data: frm.serialize(),
            success : function (data){
                console.log(data);
                var ralationData = data;
                if (data != null){
                    console.log("Inside Success Method.")
                    $('#brother').hide();
                    // $('#tableBody').load();
                    html = html +'<tr><td><input type="checkbox"></td><td>'+data.name+'</td><td>'+data.fathersName+'</td><td>'+data.age+'</td><td>'+data.gender+'</td><td>'+data.relationName+'</td><td>'+data.bank.bankName+'</td><td>'+data.bank.ifscCode+'</td><td>'+data.bank.accountNumber+'</td><td>'+data.mobile+'</td><td><select class="form-select" style="background-color: #f2f2f2" id="addrelation1" name="addrelation1" disabled> <option value="Select" selected>Add Relation</option> <option value="Brother">Brother</option> <option value="Sister">Sister</option> </select></td></tr>'
                }
                $('#tableBody').append(html);
                $('#addrelation').prop('selectedIndex',0);

                // if(data === "Saved"){
                //     console.log("Inside Success Method.")
                // }
            },
            error : function (error){
                console.log(error);
            }
        })
    }

    function submitAllFamilyData(){
        var frmdata = $('#allFamilyDetails');
        console.log("Inside All Family Datails Form.");
        console.log(frmdata);
        console.log("Serialize : " + frmdata.serialize());
        $('#farmerFamilyDetails').show();
    }

</script>
<script>
    function validateAadhar(aadhar){
        console.log("Inside Validate Aadhar---------------->>" + aadhar);
        $.ajax({
            url: "/validateAadhar",
            type: "GET",
            data: {
                "aadhar" : aadhar,
            },
            success: function (data){
                console.log(data);
                if (data != "Valid"){
                    alert("Not A Valid Aadhar!")
                    return false;
                }
            },
            error: function (error){
                console.log(error);
            }
        })
    }
</script>
</body>
</html>

