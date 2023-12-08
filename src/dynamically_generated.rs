

use mouse_rs::{types::keys::Keys, Mouse};
use serde::{Deserialize, Serialize};
use std::io::{self, Read};
use serde_json::{json,Result, Value};
use std::time::Duration;

//required sudo apt-get install libxdo-dev
fn main() -> serde_json::Result<()> {
    let mut buffer = String::new();
    let _ = io::stdin().read_to_string(&mut buffer);

    let a_s_name_function_exposed = vec![
    "move_to",
    "press",
    "release",
    "get_position",
    "wheel",
    "scroll",
    "click"
];

    let o_input: Value = serde_json::from_str(&buffer)?;
    // println!("o_input: {:?}", o_input);


    match o_input.get("s_name_function") {
        Some(Value::String(s_name_function)) => {
            if a_s_name_function_exposed.contains(&s_name_function.as_str()) {
                // ok

                let o_mouse = Mouse::new();

                
                        if(o_input["s_name_function"]== "move_to"){
                            let v_arg_from_arg_expected__x = o_input["x"].as_i64().unwrap() as i32;
let v_arg_from_arg_expected__y = o_input["y"].as_i64().unwrap() as i32;
let v_result = o_mouse.move_to(v_arg_from_arg_expected__x,
v_arg_from_arg_expected__y);

                            


                        }
                    

                        if(o_input["s_name_function"]== "press"){
                            
        let mut v_arg_from_arg_expected__button = &Keys::LEFT;
        
                    if(o_input["button"].as_str().unwrap() == "LEFT"){
                        v_arg_from_arg_expected__button = &Keys::LEFT;
                    }
                

                    if(o_input["button"].as_str().unwrap() == "RIGHT"){
                        v_arg_from_arg_expected__button = &Keys::RIGHT;
                    }
                

                    if(o_input["button"].as_str().unwrap() == "MIDDLE"){
                        v_arg_from_arg_expected__button = &Keys::MIDDLE;
                    }
                

                    if(o_input["button"].as_str().unwrap() == "WHEEL"){
                        v_arg_from_arg_expected__button = &Keys::WHEEL;
                    }
                

                    if(o_input["button"].as_str().unwrap() == "X"){
                        v_arg_from_arg_expected__button = &Keys::X;
                    }
                

                    if(o_input["button"].as_str().unwrap() == "X2"){
                        v_arg_from_arg_expected__button = &Keys::X2;
                    }
                

                    if(o_input["button"].as_str().unwrap() == "UP"){
                        v_arg_from_arg_expected__button = &Keys::UP;
                    }
                

                    if(o_input["button"].as_str().unwrap() == "DOWN"){
                        v_arg_from_arg_expected__button = &Keys::DOWN;
                    }
                

                    if(o_input["button"].as_str().unwrap() == "VERTICAL"){
                        v_arg_from_arg_expected__button = &Keys::VERTICAL;
                    }
                

                    if(o_input["button"].as_str().unwrap() == "HORIZONTAL"){
                        v_arg_from_arg_expected__button = &Keys::HORIZONTAL;
                    }
                
        ;
let v_result = o_mouse.press(v_arg_from_arg_expected__button);

                            


                        }
                    

                        if(o_input["s_name_function"]== "release"){
                            
        let mut v_arg_from_arg_expected__button = &Keys::LEFT;
        
                    if(o_input["button"].as_str().unwrap() == "LEFT"){
                        v_arg_from_arg_expected__button = &Keys::LEFT;
                    }
                

                    if(o_input["button"].as_str().unwrap() == "RIGHT"){
                        v_arg_from_arg_expected__button = &Keys::RIGHT;
                    }
                

                    if(o_input["button"].as_str().unwrap() == "MIDDLE"){
                        v_arg_from_arg_expected__button = &Keys::MIDDLE;
                    }
                

                    if(o_input["button"].as_str().unwrap() == "WHEEL"){
                        v_arg_from_arg_expected__button = &Keys::WHEEL;
                    }
                

                    if(o_input["button"].as_str().unwrap() == "X"){
                        v_arg_from_arg_expected__button = &Keys::X;
                    }
                

                    if(o_input["button"].as_str().unwrap() == "X2"){
                        v_arg_from_arg_expected__button = &Keys::X2;
                    }
                

                    if(o_input["button"].as_str().unwrap() == "UP"){
                        v_arg_from_arg_expected__button = &Keys::UP;
                    }
                

                    if(o_input["button"].as_str().unwrap() == "DOWN"){
                        v_arg_from_arg_expected__button = &Keys::DOWN;
                    }
                

                    if(o_input["button"].as_str().unwrap() == "VERTICAL"){
                        v_arg_from_arg_expected__button = &Keys::VERTICAL;
                    }
                

                    if(o_input["button"].as_str().unwrap() == "HORIZONTAL"){
                        v_arg_from_arg_expected__button = &Keys::HORIZONTAL;
                    }
                
        ;
let v_result = o_mouse.release(v_arg_from_arg_expected__button);

                            


                        }
                    

                        if(o_input["s_name_function"]== "get_position"){
                            
let v_result = o_mouse.get_position();

                            

                            let json_v_result = match v_result {
                                Ok(v) => json!({"status": "success", "x": v.x, "y": v.y}),
                                Err(e) => json!({"status": "error", "message": e.to_string()}),
                            };
                            println!("{}", serde_json::to_string(&json_v_result)?);
                        
                            return Ok(())
                            


                        }
                    

                        if(o_input["s_name_function"]== "wheel"){
                            let v_arg_from_arg_expected__delta = o_input["delta"].as_i64().unwrap() as i32;
let v_result = o_mouse.wheel(v_arg_from_arg_expected__delta);

                            


                        }
                    

                        if(o_input["s_name_function"]== "scroll"){
                            let v_arg_from_arg_expected__delta = o_input["delta"].as_i64().unwrap() as i32;
let v_result = o_mouse.scroll(v_arg_from_arg_expected__delta);

                            


                        }
                    

                        if(o_input["s_name_function"]== "click"){
                            
        let mut v_arg_from_arg_expected__button = &Keys::LEFT;
        
                    if(o_input["button"].as_str().unwrap() == "LEFT"){
                        v_arg_from_arg_expected__button = &Keys::LEFT;
                    }
                

                    if(o_input["button"].as_str().unwrap() == "RIGHT"){
                        v_arg_from_arg_expected__button = &Keys::RIGHT;
                    }
                

                    if(o_input["button"].as_str().unwrap() == "MIDDLE"){
                        v_arg_from_arg_expected__button = &Keys::MIDDLE;
                    }
                

                    if(o_input["button"].as_str().unwrap() == "WHEEL"){
                        v_arg_from_arg_expected__button = &Keys::WHEEL;
                    }
                

                    if(o_input["button"].as_str().unwrap() == "X"){
                        v_arg_from_arg_expected__button = &Keys::X;
                    }
                

                    if(o_input["button"].as_str().unwrap() == "X2"){
                        v_arg_from_arg_expected__button = &Keys::X2;
                    }
                

                    if(o_input["button"].as_str().unwrap() == "UP"){
                        v_arg_from_arg_expected__button = &Keys::UP;
                    }
                

                    if(o_input["button"].as_str().unwrap() == "DOWN"){
                        v_arg_from_arg_expected__button = &Keys::DOWN;
                    }
                

                    if(o_input["button"].as_str().unwrap() == "VERTICAL"){
                        v_arg_from_arg_expected__button = &Keys::VERTICAL;
                    }
                

                    if(o_input["button"].as_str().unwrap() == "HORIZONTAL"){
                        v_arg_from_arg_expected__button = &Keys::HORIZONTAL;
                    }
                
        ;
let v_result = o_mouse.click(v_arg_from_arg_expected__button);

                            


                        }
                    


            } else {
                println!("'s_name_function' must be a object property and contain the value of one of [\"move_to\",\"press\",\"release\",\"get_position\",\"wheel\",\"scroll\",\"click\"] ");

            }
        },
        Some(_) => {
            // 's_name_function' exists but is not a string
            println!("Error: 's_name_function' is not a string.");
        },
        None => {
            // 's_name_function' does not exist
            println!("Error: JSON must contain the property 's_name_function'.");
        }
    }


    

    Ok(())
}

