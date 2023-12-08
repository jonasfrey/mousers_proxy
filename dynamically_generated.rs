

use mouse_rs::{types::keys::Keys, Mouse};
use serde::{Deserialize, Serialize};
use std::io::{self, Read};
use serde_json::{Result, Value};
use std::time::Duration;

//required sudo apt-get install libxdo-dev
fn main() -> serde_json::Result<()> {
    let mut buffer = String::new();
    let _ = io::stdin().read_to_string(&mut buffer);

    let a_s_name_function_exposed = vec![[
    "click",
    "get_position",
    "move_to",
    "press",
    "release",
    "scroll",
    "wheel"
]];

    // println!("Parsed JSON: {:?}", o_input.s_name_function);
    let o_input: Value = serde_json::from_str(&buffer)?;
    // Access parts of the data by indexing with square brackets
    println!("Please call {} ", o_input["s_name_function"]);

    let o_mouse = Mouse::new();

    if(o_input["s_name_function"] == "move_to"){
        o_mouse.move_to(
            o_input["a_v_arg"][0].as_i64().unwrap() as i32,
            o_input["a_v_arg"][1].as_i64().unwrap() as i32,
        );
    }
    let b_s_name_function_click = o_input["s_name_function"] == "click";
    if(
        o_input["s_name_function"] == "press"
        || 
        b_s_name_function_click
    ){
        let mut o_enum = &Keys::LEFT;
        if(o_input["a_v_arg"][0].as_str().unwrap() == "LEFT"){
            o_enum = &Keys::LEFT;
        }
        let _ = o_mouse.press(
            o_enum
        );
    }
    let mut n_ms_delay = 18;
    if(b_s_name_function_click){
        n_ms_delay =  
    }
    
    if()


    // let o_mouse = Mouse::new();
    // let mouse = Mouse::new();
    // for n in 1..1000000000{
    //     let pos = mouse.get_position().unwrap();
    //     println!("X = {}, Y = {}", pos.x, pos.y);
    //     // let o =  o_mouse.get_position().unwrap("cannot get pos");
    //     // println!("{}",o.x);
    // }
    Ok(())
}


