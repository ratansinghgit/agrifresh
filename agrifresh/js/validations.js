$(function(){jQuery.validator.addMethod("lettersonly",function(e,r){return this.optional(r)||/^[a-z ]+$/i.test(e)},"Letters OPEN_TO_OTHER_LOCATIONSy please"),$("#employee").validate({rules:{e_name:"required",doj:"required",Designation:"required",dob:"required",xcel:"required",m_take:"required",address2:"required",email:{required:!0,email:!0,remote:{url:$("#url").val(),type:"post",data:{email:function(){return $('#employee :input[name="email"]').val()},id:function(){return $('#employee :input[name="id"]').val()},_token:function(){return $('#employee :input[name="_token"]').val()}}}},l_salary:{required:!0},Status:{required:!0},client:{required:!0},address1:{required:!0},c_number:{required:!0,number:!0},e_number:{number:!0},aadharnumber:{number:!0},user_type:{required:!0,remote:{url:$("#employee_url").val(),type:"get",data:{role:function(){return $('#employee :input[name="user_type"]').val()},_token:function(){return $('#employee :input[name="user_type"]').val()}}}}},messages:{e_name:"Please enter employee name",email:{email:"Please enter a valid email address",required:"Please enter email address",remote:jQuery.validator.format("Email is already taken.")},l_salary:{required:"Last withdrawn salary"},Status:{required:"Please enter employee status"},client:{required:"Please select client"},address1:{required:"Please enter address"},c_number:{required:"Please enter contact number"},user_type:{required:"The field is required",remote:"You extended the max limit of employee accounts"}},submitHandler:function(e){e.submit()}}),$("form[name='sac_codes']").validate({rules:{name:"required",code:"required"},messages:{name:"Please enter name",code:"Please enter code"},submitHandler:function(e){e.submit()}}),$("form[name='skill_posting']").validate({rules:{SkillName:"required"},messages:{SkillName:"Please enter skill name"},submitHandler:function(e){e.submit()}}),$("form[name='create_client']").validate({onfocusout:function(e){$(e).valid()},ignore:":hidden:not(.selectpicker)",rules:{name:{required:!0,lettersonly:!0,remote:{url:$("#url").val(),type:"get",data:{name:function(){return $('#create_client :input[name="name"]').val()},id:function(){return $('#create_client :input[name="id"]').val()},_token:function(){return $('#create_client :input[name="_token"]').val()}}}},c_wesite:{required:!0,url:!0,remote:{url:$("#url").val(),type:"get",data:{c_wesite:function(){return $('#create_client :input[name="c_wesite"]').val()},id:function(){return $('#create_client :input[name="id"]').val()},_token:function(){return $('#create_client :input[name="_token"]').val()}}}},c_b_number:{required:!0,number:!0},c_lin_page:{required:!0},"client_type[]":"required",c_person:{required:!0},c_prsn_dsgntn:{required:!0},email:{required:!0,email:!0,remote:{url:$("#url").val(),type:"get",data:{email:function(){return $('#create_client :input[name="email"]').val()},id:function(){return $('#create_client :input[name="id"]').val()},_token:function(){return $('#create_client :input[name="_token"]').val()}}}},client_num:{required:!0,remote:{url:$("#url").val(),type:"get",data:{client_num:function(){return $('#create_client :input[name="client_num"]').val()},id:function(){return $('#create_client :input[name="id"]').val()},_token:function(){return $('#create_client :input[name="_token"]').val()}}}},land_num:{number:!0},call_back_on:{required:!0},remarks:{required:!0}},messages:{name:{remote:"The name already in active / hold Please Verify"},client_num:{remote:"The mobile number Already in Active/Follow-Up"},email:{remote:"This Email Already Exists in Active/Follow-Up.Please contact admin"},c_wesite:{remote:"The website link already been taken"}},submitHandler:function(e){$("#create_client").loading({message:"Action In Process..."}),e.submit()}}),$("#invoice_edit").validate({rules:{client:{required:!0},spoc:{required:!0},employee:{required:!0},from_date:{required:!0,remote:{url:$("#url").val(),type:"get",data:{from_date:function(){return $('#invoice_edit :input[name="from_date"]').val()},id:function(){return $("#id").val()},employee_id:function(){return $("#employee_id").val()},_token:function(){return $('#invoice_edit :input[name="_token"]').val()}}}},to_date:{required:!0,remote:{url:$("#url").val(),type:"get",data:{to_date:function(){return $('#invoice_edit :input[name="to_date"]').val()},id:function(){return $("#id").val()},employee_id:function(){return $("#employee_id").val()},_token:function(){return $('#invoice_edit :input[name="_token"]').val()}}}},joining_date:{required:!0},workable_days:{required:!0},sac:{required:!0},customer_list:{required:!0},plce_of_supply:{required:!0},state_code:{required:!0},days_wrkd_in_this_mnth:{required:!0},client_rate:{required:!0},gst:{required:!0},sgst:{required:!0},cgst:{required:!0},client_location:{required:!0},generation_date:{required:!0},remarks:{}},messages:{from_date:{remote:"Already generated for this month"},to_date:{remote:"Already generated for this month"}},submitHandler:function(e){e.submit()}}),$("#contract_invoice").validate({rules:{client:{required:!0},spoc:{required:!0},employee:{required:!0},start_date:{required:!0,remote:{url:$("#url").val(),type:"get",data:{start_date:function(){return $('#contract_invoice :input[name="start_date"]').val()},id:function(){return $("#employee").val()},_token:function(){return $('#create_client :input[name="_token"]').val()}}}},end_date:{required:!0,remote:{url:$("#url").val(),type:"get",data:{end_date:function(){return $('#contract_invoice :input[name="end_date"]').val()},id:function(){return $("#employee").val()},_token:function(){return $('#create_client :input[name="_token"]').val()}}}},no_of_wrk_days:{required:!0},workable_days:{required:!0},client_rate:{required:!0},sac_code:{required:!0},customer_list:{required:!0}},messages:{start_date:{remote:"Already generated for this month"},end_date:{remote:"Already generated for this month"}},submitHandler:function(e){}}),$("#permanent_invoice").validate({rules:{client:{required:!0},spoc:{required:!0},employee:{required:!0},ctc:{required:!0},hire:{required:!0},customer_list:{required:!0}},submitHandler:function(e){}}),$("#finance_profile").validate({rules:{customer_id:{required:!0},contact_person:{required:!0},billed_by:{required:!0},gst:{required:!0},pan:{required:!0},bank:{lettersonly:!0},branch:{lettersonly:!0},account_number:{number:!0}},submitHandler:function(e){e.submit()}}),$("#customer_registration_admin").validate({rules:{name:{required:!0},email:{required:!0,email:!0,remote:{url:$("#url").val(),type:"get",data:{email:function(){return $('#customer_registration_admin :input[name="email"]').val()},id:function(){return $('#customer_registration_admin :input[name="id"]').val()},_token:function(){return $('#customer_registration_admin :input[name="_token"]').val()}}}},mobile:{required:!0,number:!0,remote:{url:$("#url").val(),type:"get",data:{mobile:function(){return $('#customer_registration_admin :input[name="mobile"]').val()},id:function(){return $('#customer_registration_admin :input[name="id"]').val()},_token:function(){return $('#customer_registration_admin :input[name="_token"]').val()}}}},password:{required:!0,minlength:5},password_confirmation:{required:!0,minlength:5,equalTo:"#password"},"package":{required:!0},employee_limit:{required:!0,number:!0},users_limit:{required:!0,number:!0}},messages:{email:{remote:"The email already been taken"},mobile:{remote:"The mobile already been taken"}},submitHandler:function(e){$("#customer_registration_admin").loading({message:"Action In Process..."}),e.submit()}}),$("#customer_registration_front_end").validate({rules:{company_name:{required:!0},companyType:{required:!0},company_website:{required:!0},company_address:{required:!0},email:{required:!0,email:!0,remote:{url:$("#url").val(),type:"get",data:{email:function(){return $('#customer_registration_front_end :input[name="email"]').val()},id:function(){return $('#customer_registration_front_end :input[name="id"]').val()},_token:function(){return $('#customer_registration_front_end :input[name="_token"]').val()}}}},company_phone1:{required:!0,number:!0,remote:{url:$("#url").val(),type:"get",data:{mobile:function(){return $('#customer_registration_front_end :input[name="company_phone1"]').val()},id:function(){return $('#customer_registration_front_end :input[name="id"]').val()},_token:function(){return $('#customer_registration_front_end :input[name="_token"]').val()}}}}},messages:{email:{remote:"The email already been taken"},company_phone1:{remote:"The mobile already been taken"}},submitHandler:function(e){loading(),e.submit()}}),$("#user_registration").validate({rules:{name:{required:!0},email:{required:!0,email:!0,remote:{url:$("#url").val(),type:"get",data:{email:function(){return $('#user_registration :input[name="email"]').val()},id:function(){return $('#user_registration :input[name="id"]').val()},_token:function(){return $('#user_registration :input[name="_token"]').val()}}}},mobile:{required:!0,number:!0,remote:{url:$("#url").val(),type:"get",data:{mobile:function(){return $('#user_registration :input[name="mobile"]').val()},id:function(){return $('#user_registration :input[name="id"]').val()},_token:function(){return $('#user_registration :input[name="_token"]').val()}}}},organization_id:{required:!0},password:{required:!0,minlength:5},password_confirmation:{required:!0,minlength:5,equalTo:"#password"},user_type:{required:!0,remote:{url:$("#employee_limit_url").val(),type:"get",data:{role:function(){return $('#user_registration :input[name="user_type"]').val()},_token:function(){return $('#user_registration :input[name="user_type"]').val()}}}}},messages:{email:{remote:"The email already been taken"},mobile:{remote:"The mobile already been taken"},organization_id:{required:"The field is required"},user_type:{required:"The field is required",remote:"You extended the max limit of employee accounts"},emp_team:{required:"The field is required"}},submitHandler:function(e){$("#user_registration").loading({message:"Action In Process..."}),e.submit()}}),$("#interview_schedule").validate({rules:{cli_Name:{required:!0},Post_Title:{required:!0},Location:{required:!0},cand_name:{required:!0},cand_email:{required:!0,email:!0},cand_phone:{required:!0,number:!0},Type:{required:!0},I_Sc_From:{required:!0},I_Sc_To:{required:!0},from_time:{required:!0},Interview_Status:{required:!0,remote:{url:$("#url").val(),type:"get",data:{job_id:function(){return $('#interview_schedule :input[name="job_id"]').val()},client_id:function(){return $('#interview_schedule :input[name="id"]').val()},rts_id:function(){return $('#interview_schedule :input[name="rts_id"]').val()},Interview_Status:function(){return $('#interview_schedule :input[name="Interview_Status"]').val()},_token:function(){return $('#interview_schedule :input[name="_token"]').val()}}}},Sche_Comments:{required:!0}},messages:{Interview_Status:{remote:"already scheduled"}},submitHandler:function(e){loading(),e.submit()}}),$("#poc_details").validate({rules:{name:{required:!0},Address:{required:!0},email:{required:!0,email:!0,remote:{url:$("#url").val(),type:"get",data:{email:function(){return $('#poc_details :input[name="email"]').val()},id:function(){return $('#poc_details :input[name="id"]').val()},_token:function(){return $('#poc_details :input[name="_token"]').val()},client_id:function(){return $('#poc_details :input[name="client_id"]').val()}}}},mobile:{required:!0,remote:{url:$("#url").val(),type:"get",data:{mobile:function(){return $('#poc_details :input[name="mobile"]').val()},id:function(){return $('#poc_details :input[name="id"]').val()},client_id:function(){return $('#poc_details :input[name="client_id"]').val()},_token:function(){return $('#poc_details :input[name="_token"]').val()}}}}},messages:{email:{remote:"The email already been taken"},mobile:{remote:"The mobile already been taken"}},submitHandler:function(e){loading(),e.submit()}}),$("#virtual_requ_reg").validate({rules:{first_name:{required:!0},last_name:{required:!0},email:{required:!0,email:!0,remote:{url:$("#url").val(),type:"get",data:{email:function(){return $('#virtual_requ_reg :input[name="email"]').val()},id:function(){return $('#virtual_requ_reg :input[name="id"]').val()},_token:function(){return $('#virtual_requ_reg :input[name="_token"]').val()}}}},mobile:{required:!0,remote:{url:$("#url").val(),type:"get",data:{mobile:function(){return $('#virtual_requ_reg :input[name="mobile"]').val()},id:function(){return $('#virtual_requ_reg :input[name="id"]').val()},_token:function(){return $('#virtual_requ_reg :input[name="_token"]').val()}}}},yrs_of_experience:{required:!0},location:{required:!0}},messages:{email:{remote:"The email already been taken"},mobile:{remote:"The mobile already been taken"}},submitHandler:function(e){loading(),e.submit()}}),$("#common_email").validate({rules:{common_email:{required:!0,email:!0}},submitHandler:function(e){loading(),e.submit()}}),$("#jobseeker_form").validate({rules:{Name:"required",Contact_number:{required:!0,number:!0,remote:{url:$("#url").val(),type:"get",data:{mobile:function(){return $('#jobseeker_form :input[name="Contact_number"]').val()},id:function(){return $('#jobseeker_form :input[name="id"]').val()},_token:function(){return $('#jobseeker_form :input[name="_token"]').val()}}}},DOB:"required",Education:"required",CURRENT_LOCATION:"required",Current_company:"required",Current_Designation:"required",Skill:"required",Strong_Skills:"required",Years_of_Experience:"required",Years_of_Experience_From:"required",Relevant_years_of_experience:"required",Relevant_years_of_experience_To:"required",CTC:"required",CTC_TO:"required",ECTC:"required",ECTC_TO:"required",NOTICE_PERIOD:"required",Res_for_change:"required",Communication_Skills:"required",Permanent_Address:"required",Current_Address:"required",Resume:"required",REMARKS:"required","OPEN_TO_OTHER_LOCATIONS[]":"required",Email:{required:!0,email:!0,remote:{url:$("#url").val(),type:"get",data:{email:function(){return $('#jobseeker_form :input[name="Email"]').val()},id:function(){return $('#jobseeker_form :input[name="id"]').val()},_token:function(){return $('#jobseeker_form :input[name="_token"]').val()}}}},Gender:{required:!0}},messages:{Name:"Please enter your full name",DOB:"Please enter DOB",Education:"Please select qualification",CURRENT_LOCATION:"Please select current location",Current_company:"Please select current company",Current_Designation:"Please select current designation",Skill:"Please select primary skill",Strong_Skills:"Please select secondary skill",Gender:{required:"Please select gender"},Email:{required:"Please enter a valid email address",remote:"The email already been taken"},Contact_number:{remote:"The mobile already been taken",required:"Please enter contact number"},NOTICE_PERIOD:"Please select notice period",Permanent_Address:"Please enter permanent address",Current_Address:"Please enter current address",OPEN_TO_OTHER_LOCATIONS:"Please select open to other locations",Resume:"Please select resume",REMARKS:"Please select remarks"},submitHandler:function(e){$("body").loading({message:"Action In Process..."}),e.submit()}}),$("form[name='job_posting']").validate({onfocusout:function(e){$(e).valid()},rules:{JobTiltle:"required",CleinName:"required",NumberofPositons:"required","JobLocation[]":"required","Skill[]":"required",Education:"required",PriorityStatus:"required",client_spoc_owner:"required","CleintSPOC[]":"required","AssignedPersonDetails[]":"required",Ovr_all_Yr_Ex_Frm:"required",Rel_Yr_Ex_Frm:{required:!0,notGreater:"#Ovr_all_Yr_Ex_Frm"},JobDescription:{required:function(){CKEDITOR.instances.JobDescription.updateElement();var e=textarea.value.replace(/<[^>]*>/gi,"");return 0===e.length}}},messages:{Relevant_years_of_experience:{notGreater:"Relevant should less than or equal to Overall experience."}},highlight:function(e){$(e).closest(".form-control").addClass("error")},errorElement:"span",errorClass:"error",submitHandler:function(e){e.submit(),$("#job_posting_loading").loading({message:"Action In Process..."})}}),$("#packages").validate({rules:{name:{required:!0},price:{required:!0},users_limit:{required:!0},description:{required:function(){CKEDITOR.instances.description.updateElement()},minlength:1}},submitHandler:function(e){loading(),e.submit()}}),$("#Tdate").on("blur",function(){postdata={},postdata.leaveTitle=$("#leaveTitle").val(),postdata.LeaveFrom=$("#Fdate").val(),postdata.LeaveTo=$("#Tdate").val(),postdata._token=$("#_token").val();$.ajax({type:"POST",url:$("#checkLeaves").val(),data:postdata,dataType:"json",success:function(e){if(null==e.leaves&&(e.leaves=0),0==e.status){if(e.leaves>1)var r="leaves";else var r="leave";if("Comp-Off"==e.leaveTitle)var t="Comp-Off Leaves are not available.",n="You have "+e.leaves+" available Comp-Off "+r;else var t="Leaves are not available. We will consider this as a LOP.",n="You have "+e.leaves+" available "+r+". Remaining will be Either Casual (or) LOP.";0==e.leaves?(toastr.error(t),$("#info").text(t),$("#alertInfo").show()):(toastr.error(n),$("#info").text(n),$("#alertInfo").show())}else $("#alertInfo").hide()}})}),$("#leavesReq").validate({rules:{leaveTitle:{required:!0},Fdate:{required:!0},Tdate:{required:!0},Message:{required:!0}},submitHandler:function(e){if("Comp-Off"==$("#leaveTitle").val()){postdata={},postdata.leaveTitle=$("#leaveTitle").val(),postdata.LeaveFrom=$("#Fdate").val(),postdata.LeaveTo=$("#Tdate").val(),postdata._token=$("#_token").val();$.ajax({type:"POST",url:$("#checkLeaves").val(),data:postdata,dataType:"json",success:function(r){if(null==r.leaves&&(r.leaves=0),0==r.status)if(0==r.leaves)$("#info").text("Comp-Off Leaves are not available."),$("#alertInfo").show();else{if(r.leaves>1)var t="leaves";else var t="leave";$("#info").text("You have "+r.leaves+" available Comp-Off "+t),$("#alertInfo").show()}else $("#alertInfo").hide(),e.submit()}})}else e.submit()}}),$("#reset_password").validate({rules:{email:{required:!0,email:!0}},messages:{email:{required:"The email field is required."}},submitHandler:function(e){loading(),e.submit()}}),$("#login").validate({rules:{email:{required:!0,email:!0},password:{required:!0}},messages:{email:{required:"The email field is required."}},submitHandler:function(e){loading(),e.submit()}}),$("form[name='create_team']").validate({rules:{teamName:"required",department:"required","reportingMGR[]":"required","approvalMGR[]":"required"},messages:{teamName:"Please enter team name",department:"Please choose department","reportingMGR[]":"Please choose reporting manager","approvalMGR[]":"Please choose approval manager"},submitHandler:function(e){e.submit()}}),$("form[name='edit_team']").validate({rules:{teamName:"required",department:"required","reportingMGR[]":"required","approvalMGR[]":"required"},messages:{teamName:"Please enter team name",department:"Please choose department","reportingMGR[]":"Please choose reporting manager","approvalMGR[]":"Please choose approval manager"},submitHandler:function(e){e.submit()}}),$("form[name='cancel_interview']").validate({rules:{candidate_name:"required",schedule_on:"required",reason:"required"},messages:{},submitHandler:function(e){e.submit()}}),$("form[name='letter_settings']").validate({rules:{contact_peron:{required:!0},designation:{required:!0},full_name:{required:!0},short_name:{required:!0}},messages:{},submitHandler:function(e){loading(),e.submit()}}),$("form[name='admin_settings']").validate({rules:{closed_jobs_value:{required:!0,number:!0}},submitHandler:function(e){loading(),e.submit()}}),$("form[name='department']").validate({rules:{deptName:{required:!0},deptHead:{required:!0}},submitHandler:function(e){loading(),e.submit()}}),jQuery.validator.addMethod("notEqual",function(e,r,t){return this.optional(r)||e!=$(t).val()},"Contact number and Alternate contact number should not same."),jQuery.validator.addMethod("notGreater",function(e,r,t){return this.optional(r)||e<=$(t).val()},"Relevant should less than or equal to Overall experience."),$("form[name='RTS']").validate({rules:{Name:"required",Contact_number:{required:!0},DOB:"required",Education:"required",CURRENT_LOCATION:"required",Current_company:"required",Current_Designation:"required",Skill:"required",Years_of_Experience:"required",Years_of_Experience_From:"required",Relevant_years_of_experience:{required:!0,notGreater:"#Years_of_Experience"},Relevant_years_of_experience_To:"required",CTC:"required",CTC_TO:"required",ECTC:"required",ECTC_TO:"required",NOTICE_PERIOD:"required",Res_for_change:"required",Communication_Skills:"required",Permanent_Address:"required",Current_Address:"required",Resume:"required",REMARKS:"required","OPEN_TO_OTHER_LOCATIONS[]":"required",Email:{required:!0,email:!0},Gender:{required:!0},Alternate_contact_number:{required:!1,notEqual:"#Contact_number"},INDUSTRY:"required"},messages:{Name:"Please enter your full name",Contact_number:"Please enter contact number",DOB:"Please enter DOB",Education:"Please select qualification",CURRENT_LOCATION:"Please select current location",Current_company:"Please select current company",Current_Designation:"Please select current designation",Skill:"Please select primary skill","Strong_Skills[]":"Please choose Secondary Skills",Gender:{required:"Please select gender"},email:"Please enter a valid email address",NOTICE_PERIOD:"Please select notice period",Permanent_Address:"Please enter permanent address",Current_Address:"Please enter current address",OPEN_TO_OTHER_LOCATIONS:"Please select open to other locations",Resume:"Please select resume",REMARKS:"Please select remarks",Relevant_years_of_experience:{notGreater:"Relevant should less than or equal to Overall experience."}},submitHandler:function(e){$("body").loading({message:"Action In Process..."}),e.submit()}}),$("form[name='RTS_Edit']").validate({	ignore: false,errorClass: "error text-warning",validClass: "success text-success",highlight: function (element, errorClass) {},rules:{Name:"required",Contact_number:{required:!0,number:!0},DOB:"required",Education:"required",CURRENT_LOCATION:"required",Current_company:"required",Current_Designation:"required",Skill:"required",Years_of_Experience:"required",Years_of_Experience_From:"required",Relevant_years_of_experience:{required:!0,notGreater:"#Years_of_Experience"},Relevant_years_of_experience_To:"required",CTC:"required",CTC_TO:"required",ECTC:"required",ECTC_TO:"required",NOTICE_PERIOD:"required",Res_for_change:"required",Communication_Skills:"required","Strong_Skills[]":"required",Permanent_Address:"required",Current_Address:"required",REMARKS:"required","OPEN_TO_OTHER_LOCATIONS[]":"required",Email:{required:!0,email:!0},Gender:{required:!0},Alternate_contact_number:{required:!1,notEqual:"#Contact_number"}},messages:{Name:"Please enter your full name",Contact_number:"Please enter contact number",DOB:"Please enter DOB",Education:"Please select qualification",CURRENT_LOCATION:"Please select current location",Current_company:"Please select current company",Current_Designation:"Please select current designation",Skill:"Please select primary skill","Strong_Skills[]":"Please choose Secondary Skills",Gender:{required:"Please select gender"},email:"Please enter a valid email address",NOTICE_PERIOD:"Please select notice period",Permanent_Address:"Please enter permanent address",Current_Address:"Please enter current address",OPEN_TO_OTHER_LOCATIONS:"Please select open to other locations",Resume:"Please select resume",REMARKS:"Please select remarks",Relevant_years_of_experience:{notGreater:"Relevant should less than or equal to Overall experience."}},submitHandler:function(e){$("body").loading({message:"Action In Process..."}),e.submit()},invalidHandler: function(e,validator) {for (var i=0;i<validator.errorList.length;i++){$(validator.errorList[i].element).parents('.panel-collapse.collapse').collapse('show');}}})});