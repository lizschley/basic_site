function misc_modal(link_id) {
  modal_div = document.getElementById('modal_dialog_id');
  //document.getElementById(modal_div).classList.replace('modal-lg', 'modal-fullscreen');
  switch(link_id) {
      case "google_sheet_image":
        text = '<figure class="text-center"><img src="images/filters_in_google_sheets.png" class="img-fluid rounded imgshadow" alt="Snapshot of Working Spreadsheet used to Develop the Formulas"><figcaption class="figure-caption text-center">Resulting spreadsheet Allows me to easily access desired data</figcaption></figure>';
        title = 'Filtering Google Sheets with Many to Many Relationships';
        modal_div.classList.replace('modal-lg', 'modal-fullscreen');
        break;
      case "sheets_skip_story":
        text = '<p>These formulas are tested and are on a separate tab from the data they filter.</p><p>This formula counts the number of fields of a given value: <span class="code">=COUNTif(groups_paragraph!E2:E712,A2)</span> E2:E712 is the column that will be tested for given value; and A2 is the field where the value lives.</p><p>This formula lists found values from the E column, whenever the value in the E2:E712 column matches A2. The result will populate from where the formula is pasted, down and, if multiple columns are retrieved, to the right. This example is pasted in F2, so the data appears in the F and G columns. Here is the formula: <span class="code">=Filter(groups_paragraph!E2:F780,groups_paragraph!E2:E780=A2)</span></p><p>This formula prints out every row that matches one or the specified criteria: <span class="code">=Filter(paragraphs!A2:L678, (paragraphs!A2:A678=G2) + (paragraphs!A2:A678=G3) + (paragraphs!A2:A678=G4) + (paragraphs!A2:A678=G5))</span></p>';
        title = 'Three Google Sheet Formulas';
        modal_div.classList.replace('modal-fullscreen', 'modal-lg');
        break;
      default:
        text = "Have never heard of that fruit...";
        title = "Programming Oversight."
    }    
 return {
    text: text,
    title: title
  };
};
