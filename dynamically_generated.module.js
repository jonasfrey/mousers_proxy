
import {
    f_a_n_u8__stdout__from_node_command
} from "./functions.module.js"
let o_text_encoder = new TextEncoder();
let o_text_decoder = new TextDecoder();
    
        let f_mousers_move_to = async function(
            x,
y
        ){
            let s_json_param = JSON.stringify(
                {
                    s_name_function: "move_to", 
                    x,
y
                }
            )
            // console.log(s_json_param)
            let a_n_u8 = o_text_encoder.encode(
                s_json_param
            );
            let a_n_u8_out = await f_a_n_u8__stdout__from_node_command(
                './target/debug/dynamically_generated', 
                [], 
                a_n_u8
            )
            if(a_n_u8_out.length > 0){
                return JSON.parse(o_text_decoder.decode(a_n_u8_out.buffer));
            }

        }

        let f_mousers_press = async function(
            button
        ){
            let s_json_param = JSON.stringify(
                {
                    s_name_function: "press", 
                    button
                }
            )
            // console.log(s_json_param)
            let a_n_u8 = o_text_encoder.encode(
                s_json_param
            );
            let a_n_u8_out = await f_a_n_u8__stdout__from_node_command(
                './target/debug/dynamically_generated', 
                [], 
                a_n_u8
            )
            if(a_n_u8_out.length > 0){
                return JSON.parse(o_text_decoder.decode(a_n_u8_out.buffer));
            }

        }

        let f_mousers_release = async function(
            button
        ){
            let s_json_param = JSON.stringify(
                {
                    s_name_function: "release", 
                    button
                }
            )
            // console.log(s_json_param)
            let a_n_u8 = o_text_encoder.encode(
                s_json_param
            );
            let a_n_u8_out = await f_a_n_u8__stdout__from_node_command(
                './target/debug/dynamically_generated', 
                [], 
                a_n_u8
            )
            if(a_n_u8_out.length > 0){
                return JSON.parse(o_text_decoder.decode(a_n_u8_out.buffer));
            }

        }

        let f_mousers_get_position = async function(
            
        ){
            let s_json_param = JSON.stringify(
                {
                    s_name_function: "get_position", 
                    
                }
            )
            // console.log(s_json_param)
            let a_n_u8 = o_text_encoder.encode(
                s_json_param
            );
            let a_n_u8_out = await f_a_n_u8__stdout__from_node_command(
                './target/debug/dynamically_generated', 
                [], 
                a_n_u8
            )
            if(a_n_u8_out.length > 0){
                return JSON.parse(o_text_decoder.decode(a_n_u8_out.buffer));
            }

        }

        let f_mousers_wheel = async function(
            delta
        ){
            let s_json_param = JSON.stringify(
                {
                    s_name_function: "wheel", 
                    delta
                }
            )
            // console.log(s_json_param)
            let a_n_u8 = o_text_encoder.encode(
                s_json_param
            );
            let a_n_u8_out = await f_a_n_u8__stdout__from_node_command(
                './target/debug/dynamically_generated', 
                [], 
                a_n_u8
            )
            if(a_n_u8_out.length > 0){
                return JSON.parse(o_text_decoder.decode(a_n_u8_out.buffer));
            }

        }

        let f_mousers_scroll = async function(
            delta
        ){
            let s_json_param = JSON.stringify(
                {
                    s_name_function: "scroll", 
                    delta
                }
            )
            // console.log(s_json_param)
            let a_n_u8 = o_text_encoder.encode(
                s_json_param
            );
            let a_n_u8_out = await f_a_n_u8__stdout__from_node_command(
                './target/debug/dynamically_generated', 
                [], 
                a_n_u8
            )
            if(a_n_u8_out.length > 0){
                return JSON.parse(o_text_decoder.decode(a_n_u8_out.buffer));
            }

        }

        let f_mousers_click = async function(
            button
        ){
            let s_json_param = JSON.stringify(
                {
                    s_name_function: "click", 
                    button
                }
            )
            // console.log(s_json_param)
            let a_n_u8 = o_text_encoder.encode(
                s_json_param
            );
            let a_n_u8_out = await f_a_n_u8__stdout__from_node_command(
                './target/debug/dynamically_generated', 
                [], 
                a_n_u8
            )
            if(a_n_u8_out.length > 0){
                return JSON.parse(o_text_decoder.decode(a_n_u8_out.buffer));
            }

        }

    let o_s__enum_mouse_rs_dd_types_dd_keys_dd_Keys = {
        LEFT: "LEFT",
RIGHT: "RIGHT",
MIDDLE: "MIDDLE",
WHEEL: "WHEEL",
X: "X",
X2: "X2",
UP: "UP",
DOWN: "DOWN",
VERTICAL: "VERTICAL",
HORIZONTAL: "HORIZONTAL"
    }

    export {
        o_s__enum_mouse_rs_dd_types_dd_keys_dd_Keys,
        f_mousers_move_to,f_mousers_press,f_mousers_release,f_mousers_get_position,f_mousers_wheel,f_mousers_scroll,f_mousers_click
    }
