const table_ids = ['community_table', 'va_table', 'ne_table', 'non_native_table']
let table_id = ''

document.addEventListener("DOMContentLoaded", function(event) {
    // console.log ('in document loaded event listener')
    for (let idx = 0; idx < table_ids.length; idx++) {
        let in_id = table_ids[idx]
        // console.log(`in_id == ${in_id} el will be next`)
        let el = document.getElementById(in_id)
        console.log(el)
        if (el == null || el == undefined) continue;
        if (in_id != el.id) continue;
        // console.log(`after all continues ${el.id}`)
        table_id = in_id
        break;
    }
    // console.log (`table_id == ${table_id}`)
    table_id = '#' + table_id
    table = new DataTable(table_id)
});
