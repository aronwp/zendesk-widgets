(function () {

/* This widget uses arrays to store the fields you which to show or hide based on a users selection
** Each field you wish to hide contains three fields that need to be hidden 
** 1) The title which is a H3 HTML tag. This uses jQuery to search for the title so make one entry in the array like this h3:contains(Division)
** 2) THe description (which is optional) that is a <P> HTML Tag. Like the title we do a searh for words in the description like this p:contains(Which Division) so add that to the next element in the array
** 3) The last bit that need to be in the array is the selector for the field which is like  #ticket_fields_20389132 the number being the ID of the custom field. 
**
** You need to create a array for each condition you wish to exist. 
*/

var creative_request = ['h3:contains(Division)','p:contains(Which Division)','#ticket_fields_20389132','h3:contains(Phone Number)','#ticket_fields_20389182','h3:contains(Request Type)','p:contains(or On-going)','#ticket_fields_20388673','h3:contains(Contact Name)','#ticket_fields_20391371','h3:contains(Additional Notes)','p:contains(please provide justification)','#ticket_fields_20391376'];

var project_request = ['h3:contains(No Revenue)','p:contains(no revenue)','#ticket_fields_20392967','h3:contains(Websites)','p:contains(verticals does this project)','#ticket_fields_20392977','h3:contains(Channels)','p:contains(Identify any channel)','#ticket_fields_20392982','h3:contains(Other Departments)','p:contains(how other departments)','#ticket_fields_20392987','h3:contains(Status Tracking)','p:contains(stats tracking requirements)','#ticket_fields_20392992','h3:contains(Internal Platform)','p:contains(being built internally)','#ticket_fields_20395556','h3:contains(Reporting Requirements)','p:contains(specific reporting requirements)','#ticket_fields_20395561','h3:contains(Standard Ad Units)','p:contains(standard in page)','#ticket_fields_20395566','h3:contains(Wallpaper)','p:contains(if wall paper is)','#ticket_fields_20395571','h3:contains(Video)','p:contains(incorporating video)','#ticket_fields_20395576','h3:contains(Third Party)','p:contains(third party involvement)','#ticket_fields_20395581','h3:contains(Domain Name)','p:contains(DNS change)','#ticket_fields_20395586','h3:contains(Required Departments)','#ticket_fields_20395591','h3:contains(Technical Specs)','p:contains(Technical Specs)','#ticket_fields_20395596','h3:contains(Project Contact)','p:contains(Enter Contact Name)','#ticket_fields_20392048','h3:contains(Project type)','#ticket_fields_20392053','h3:contains(Project Name)','p:contains(Enter the project name)','#ticket_fields_20395381','h3:contains(Success Criteria)','p:contains(measure the success)','#ticket_fields_20392058','h3:contains(Sponsor Phone)','#ticket_fields_20392063','h3:contains(Sponsor Department)','#ticket_fields_20392068','h3:contains(Project Milestones)','p:contains(milestones for the project)','#ticket_fields_20392073','h3:contains(Nonprofit)','p:contains(is for charity or a nonprofit group)','#ticket_fields_20392078','h3:contains(Indirect Revenue)','p:contains(any indirect revenue)','#ticket_fields_20392083','h3:contains(Content Location)','p:contains(built internally or if it is a 3rd Party)','#ticket_fields_20392088','h3:contains(Intersitials)','p:contains(Identify if interstitials)','#ticket_fields_20392093','h3:contains(Sponsor email)','#ticket_fields_20395421','h3:contains(Is due date flexible)','#ticket_fields_20395426','h3:contains(Affected URL)','p:contains(URL of affected)','#ticket_fields_20392133','h3:contains(If the due date not flexible)','p:contains(An ad campaign running)','#ticket_fields_20395466','h3:contains(Project Background)','p:contains(The background of the Project)','#ticket_fields_20392932','h3:contains(Project Benefits)','p:contains(outline of what the benefits are)','#ticket_fields_20392937','h3:contains(Consumer Need)','p:contains(consumer will this project satisfy)','#ticket_fields_20392942','h3:contains(Estimated Revenue)','#ticket_fields_20395506','h3:contains(Project Objectives and Deliverables)','p:contains(specific objectives for the project)','#ticket_fields_20392947','h3:contains(Sponsors Name)','#ticket_fields_20392952','h3:contains(Sponsor location)','#ticket_fields_20392957'];


var date_fields = ['h3:contains(Date Required)','#ticket_fields_20389142','h3:contains(Requested date)','#ticket_fields_20388678'];
var common_fields = ['h3:contains(Priority)','p:contains(Request priority)','#ticket_priority_id','h3:contains(Description)','p:contains(Thoroughly describe)','#comment_value'];

//the array the hides everything
var hideAll = [creative_request, project_request, date_fields, common_fields]

//condition fields for the end user request form make sure you change the field ID to yours. 
$j(document).ready(function() {  
    
    //function to hide a array of arrays 
       var hide = function(){
           $j.each(arguments, function(i, item){
               for(y = 0; y < item.length; y++){
                 for(x = 0; x < item[y].length; x++){ $j(item[y][x]).hide();}
               }
           }
               );
       }
       //function to show a array of arrays
       var show = function(){
              $j.each(arguments, function(i, item){
                  for(y = 0; y < item.length; y++){
                    for(x = 0; x < item[y].length; x++){ $j(item[y][x]).show();}
                  }
              }
                  );
       }

   //check to see if you are on the end users request page
   if(location.pathname === '/requests/new' || location.pathname === '/anonymous_requests/new') {
   //hide all the fields
   hide(hideAll);

      //monitor the dropdown field
      $j('#ticket_fields_20381732').change(function (){ 
         //grab the value of the dropdown
         var userSelection = $j('#ticket_fields_20381732').val();
         if(userSelection === 'project_request') { 
             //hide all the fields
                hide(hideAll);
            //then show the array of fields you want to display
             show(project_request, date_fields, common_fields)

          }

          if(userSelection === 'creative_request'){ 
              //hide all the fields
                  hide(hideAll);
              //then show the array of fields you want to display
               show(creative_request, date_fields, common_fields)
          }
          if(userSelection !== 'creative_request' && userSelection !== 'project_request')  {
               //hide all the fields
                    hide(hideAll);
                //then show the array of fields you want to display
                 show(date_fields, common_fields)
         }




         });
    }

});


}());