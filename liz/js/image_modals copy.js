function image_modal(link_id) {
  switch(link_id) {
      case "google_sheet_image_id":
        text = '<figure class="float-end px-2"><img src="liz/images/filters_in_google_sheets.png" class="img-fluid rounded imgshadow" alt="Snapshot of Working Spreadsheet used to Develop the Formulas"><figcaption class="figure-caption text-center">Resulting Spreadsheet Allowing me to Easily Access Needed Data</figcaption></figure>';
        title = 'Example of Filtering Google Sheets with Many to Many Relationships using an Intermedate Working Sheet';
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
