function community_modal(link_id) {
    let text = get_code(link_id)
    switch(link_id) {
        case "Chrysogonum-virginianum":
          text = chrysogonum_virginianum()
          title = 'Chrysogonum virginianum';
          break;
        case "Kalmia-latifolia":
          text = kalmia_latifolia();
          title = 'Kalmia latifolia';
          break;
        case "Rosa-carolina":
          text = rosa_carolina();
          title = 'Rosa carolina';
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

  function get_code(link_id) {
    // https://www.geeksforgeeks.org/javascript/how-to-read-a-local-text-file-using-javascript/
    //liz/data/community_html_text/ + link_id + html
    return ''
  }