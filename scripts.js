var i = 2;

$(function () {
    // an event listener that will be triggered any time an li is clicked
    $("div").click(function () {
        // when triggered, toggleClass will add the class of checked if it is not already applied to that element, or remove it if it has been
        $(this).toggleClass("checked");
        // closing brackets for the event listener
    });
    //closing brackets for the document ready
});

$('.addFieldset').click(function () {
    var resourceBox = '<fieldset class="resource' + i + '" id="resourceContainer"><div class="labelInputContainer resource"><label for="resource' + i + '">Resource Name:</label><input type="text" id="resource' + i + '" name="resource' + i + '" required></div><div class="labelInputContainer resourceLink"><label for="resourceLink' + i + '">Resource Link:</label><input type="text" id="resourceLink' + i + '" name="resourceLink' + i + '"></div><div class="labelInputContainer resourceCategory"><label for="resourceCategory' + i + '">Resource Category:</label><select id="resourceCategory' + i + '" name="resourceCategory' + i + '"><option value disabled selected>Please choose an option</option><option value="housing">Housing</option><option value="legal">Legal</option><option value="immigration">Immigration</option><option value="government">Government</option><option value="employment">Employment</option><option value="health">Health and Mental Health</option><option value="education">Education</option><option value="arts">Arts and Culture</option><option value="religious">Religious and Spiritual</option><option value="other">Other</option></select></div><div class="labelInputContainer resourceOther"><label for="other' + i + '">If "Other," please suggest a category:</label><input type="text" name="other'+i+'" id="other' + i + '"></div><div class="labelInputContainer resourceNotes"><label for="resourceNotes' + i +'">Notes:</label><input type="text" name="resourceNotes' + i + '" id="resourceNotes' + i +'"></div></fieldset >'
    
    $('.fieldsetContainer').append(resourceBox)
    i++;
    // This alert is another method
});