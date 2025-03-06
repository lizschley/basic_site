function community_modal(link_id) {
    // replace with python generated code
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