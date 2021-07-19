/* Function name: onFormSubmit
*  Description: This function is used for take data on form submit button
*/
function onFormSubmit()
{
        var form_data =  getFormData();
        var = openDatabase("mydb", );



}
/* Function name: getFormData
*  Description: Get the form data fields form the html page
*/
function getFormData()
{
        var form_data = {};
        form_data["f_name"] = document.getElementsByName("f_name").values;
        form_data["dob"] = document.getElementsByName("dob").values;
        form_data["gender"] = document.getElementsByName("gender").values;
        form_data["year_of_exp"] = document.getElementsByName("year_of_exp").values;
        form_data["skillset"] = document.getElementsByName("skillset").values;
        form_data["summery"] = document.getElementsByName("summery").values;

        return form_data;
}
function data_from()
{
        // Data from database read operation
        retunr var;
}