/**
 * Perform custom preprocessing or actions before submitting form. 
 * Common presubmission tasks include form validation and 
 * preprocessing of form data.
 * 
 * @param {boolean} true if all OK to proceed with form submission; 
 *                  false implies terminate form submission process
 * @param {Object} data results of form processing; error message if isSuccess == false
 * @return {boolean} true if OK; otherwise false
 */
phoneui.preSubmitForm_m1_Opinator5 = function(form) {
  // add custom presubmission code here, e.g., form validation & error handling
  // return false to terminate form submission
  return true;
}

/**
 * Perform custom actions upon return from form submission.
 * 
 * @param {boolean} isSuccess true if all OK; otherwise false
 * @param {Object} data results of form processing; error message if isSuccess == false
 * @return {boolean} true if OK; otherwise false
 */
phoneui.postSubmitForm_m1_Opinator5 = function(isSuccess, data) {
  // add custom postubmission processing code here,
  // e.g., parse and process results & update UI controls with data as needed
  // return false to terminate form processing
  var result = true;
  if (isSuccess) {
    // process data
    result = true;
  } else {
    // submit failed
    // data = error msg
    result = false;
  }
  return result;
}

/**
 * Notification that the UI is about to transition to a new page.
 * Perform custom prepage-transition logic here.
 * @param {String} currentPageId 
 * @param {String} targetPageId 
 * @returns {boolean} true to continue transtion; false to halt transition
 */
phoneui.prePageTransition = function(currentPageId,targetPageId) {
  // add custom pre-transition code here
  // return false to terminate transition
  return true;
}

/**
 * Notification that the UI has transition to a new page.
 * 
 * @param {String} newPageId 
 */
phoneui.postPageTransition = function(newPageId) {
  
}

/**
 * Notification that device orientation has changed. 
 * 
 * @param {String} newOrientation 
 */
phoneui.postOrientationChange = function(newOrientation) {
  
}

/**
 * Called when document is loaded.
 */
phoneui.documentReadyHandler = function() {
}

