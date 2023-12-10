function image_modal(link_id) {
  modal_div = document.getElementById('modal_dialog_id');
  modal_div.classList.replace('modal-lg', 'modal-fullscreen');
  //document.getElementById(modal_div).classList.replace('modal-lg', 'modal-fullscreen');
  switch(link_id) {
      case "google_sheet_image":
        text = '<figure class="text-center"><img src="images/filters_in_google_sheets.png" class="img-fluid rounded imgshadow" alt="Snapshot of Working Spreadsheet used to Develop the Formulas"><figcaption class="figure-caption text-center">Resulting spreadsheet Allows me to easily access desired data</figcaption></figure>';
        title = 'Filtering Google Sheets with Many to Many Relationships';
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
