import {
    f_mousers_click,
    f_mousers_get_position,
    f_mousers_move_to, 
    o_s__enum_mouse_rs_dd_types_dd_keys_dd_Keys
} from "./dynamically_generated.module.js";

import {
    f_sleep_ms
} from "https://deno.land/x/handyhelpers/mod.js";
// let v = await f_mousers_move_to(200, 200)
let n_ms_delay = 33;
for(let n = 0; n< 100; n+=1){
    console.log(`f_mousers_get_position, ${n}`)
    await f_sleep_ms(n_ms_delay);
    console.log(
        await f_mousers_get_position()
    )
}

// for(let n = 0; n< 100; n+=1){
//     console.log(`f_mousers_move_to, ${n}`)
//     await f_sleep_ms(n_ms_delay);
//     // console.log(
//         await f_mousers_move_to(
//             parseInt((Math.sin(n*0.1)*.5+.5)*500),
//             parseInt((Math.cos(n*0.1)*.5+.5)*500),
//         )
//     // )
// }
let b = prompt('this is going to click really really fast, proceed? (y)') == 'y';
if(b){

    for(let n = 0; n< 100; n+=1){
        // await f_sleep_ms(n_ms_delay);
        // console.log(
            await f_mousers_click(
                o_s__enum_mouse_rs_dd_types_dd_keys_dd_Keys.LEFT
            )
        // )
    }
}
