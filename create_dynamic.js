import {
    f_v_s__between
} from "https://deno.land/x/handyhelpers@2.4/mod.js"
// get the function params 
// https://docs.rs/mouse-rs/0.4.2/mouse_rs/struct.Mouse.html
//JSON.stringify(Array.from(document.querySelectorAll('.code-header')).map(o=>o.innerText))
let a_s_firstline_function = [ 
    // "impl Mouse","pub fn new() -> Mouse",
"pub fn move_to(&self, x: i32, y: i32) -> Result<(), Box<dyn Error>>",
"pub fn press<'a>(&self, button: &'a Keys) -> Result<(), Box<dyn Error + 'a>>",
"pub fn release<'a>(&self, button: &'a Keys) -> Result<(), Box<dyn Error + 'a>>",
"pub fn get_position(&self) -> Result<Point, Box<dyn Error>>",
"pub fn wheel(&self, delta: i32) -> Result<(), Box<dyn Error>>",
"pub fn scroll(&self, delta: i32) -> Result<(), Box<dyn Error>>",
"pub fn click<'a>(&self, button: &'a Keys) -> Result<(), Box<dyn Error + 'a>>",
// "impl RefUnwindSafe for Mouse",
// "impl Send for Mouse",
// "impl Sync for Mouse",
// "impl Unpin for Mouse",
// "impl UnwindSafe for Mouse",
// "impl<T> Any for T\\nwhere\\n    T: 'static + ?Sized, ",
// "fn type_id(&self) -> TypeId",
// "impl<T> Borrow<T> for T\\nwhere\\n    T: ?Sized, ",
// "fn borrow(&self) -> &T",
// "impl<T> BorrowMut<T> for T\\nwhere\\n    T: ?Sized, ",
// "fn borrow_mut(&mut self) -> &mut T",
// "impl<T> From<T> for T",
// "fn from(t: T) -> T",
// "impl<T, U> Into<U> for T\\nwhere\\n    U: From<T>, ",
// "fn into(self) -> U",
// "impl<T, U> TryFrom<U> for T\\nwhere\\n    U: Into<T>, ",
// "type Error = Infallible",
// "fn try_from(value: U) -> Result<T, <T as TryFrom<U>>::Error>",
// "impl<T, U> TryInto<U> for T\\nwhere\\n    U: TryFrom<T>, ",
// "type Error = <U as TryFrom<T>>::Error",
// "fn try_into(self) -> Result<U, <U as TryFrom<T>>::Error>"
]
let a_s_name_function_exposed = [
    "click",
    "get_position",
    "move_to",
    "press",
    "release",
    "scroll",
    "wheel",
]
class O_rs_function{
    constructor(
        s_name, 
        a_o_arg_expected
    ){
        this.s_name = s_name, 
        this.a_o_arg_expected = a_o_arg_expected
    }
}
class O_arg_expected{
    constructor(
        s_name, 
        s_type
    ){
        this.s_name = s_name, 
        this.s_type = s_type   
    }
}
let a_s__enum_mouse_rs_dd_types_dd_keys_dd_Keys = [
    "LEFT",
    "RIGHT",
    "MIDDLE",
    "WHEEL",
    "X",
    "X2",
    "UP",
    "DOWN",
    "VERTICAL",
    "HORIZONTAL",
];
class O_arg_from_arg_expected{
    constructor(
        o_arg_expected, 
        s_name, 
        s_rs_init
        ){
            this.o_arg_expected = o_arg_expected, 
            this.s_name = s_name, 
            this.s_rs_init = s_rs_init 
        }
}
let f_o_arg_from_arg_expected = function(o_arg_expected, s_rs_serde_value){
    let s_name = `v_arg_from_arg_expected__${o_arg_expected.s_name}`;
    let s_rs_init = `//could not convert serde value to expected argument type`;
    //.as_i64().unwrap_or(0) as i32;
    if([
        'i8', 
        'i16', 
        'i32',
        'i64',
        'u8', 
        'u16', 
        'u32', 
        'u64',
        'f32',
        'f64' 
    ].includes(o_arg_expected.s_type)){
        let s_char_type = o_arg_expected.s_type[0];

        s_rs_init = `let ${s_name} = ${s_rs_serde_value}.as_${s_char_type}64().unwrap() as ${o_arg_expected.s_type}`
    }
    if(o_arg_expected.s_type == 'Keys'){
        s_rs_init = `
        let mut ${s_name} = &Keys::LEFT;
        ${a_s__enum_mouse_rs_dd_types_dd_keys_dd_Keys.map(
            s_name_enum=>{
                return `
                    if(${s_rs_serde_value}.as_str().unwrap() == "${s_name_enum}"){
                        ${s_name} = &Keys::${s_name_enum};
                    }
                `
            }).join('\n')}
        `;
    }
    return new O_arg_from_arg_expected(
        o_arg_expected,
        s_name, 
        s_rs_init
    )
}
let a_o_rs_function = a_s_firstline_function.map(
    s=>{
        //"pub fn click<'a>(&self, button: &'a Keys) -> Result<(), Box<dyn Error + 'a>>",
        let s_name = f_v_s__between(s, 'fn', '(')
        if(s_name.includes('<')){
            s_name = f_v_s__between(s_name, s_name[0], '<')
        }
        s_name = s_name.trim()

        if(!s_name){
            throw Error(`could not find function name in line ${s}`)
        }
        let s_args = f_v_s__between(s, '(', ')');
        let a_s_arg = s_args.split(',');
        console.log(a_s_arg)
        let a_o_arg_expected = a_s_arg.map(
            s_arg =>{
                let a_s_part = s_arg.split(':')
                let s_name = a_s_part.shift();
                let s_type = s_arg.split(' ').pop();
                return new O_arg_expected(s_name.trim(), s_type.trim())
            }
        )
        let o_rs_function = new O_rs_function(
            s_name, 
            a_o_arg_expected
        )
        return o_rs_function
    }
)
console.log(a_o_rs_function)
a_s_name_function_exposed = a_o_rs_function.map(o=>o.s_name);
let s = `json ${JSON.stringify(a_s_name_function_exposed)}`

let s_prop_name_function = `s_name_function`;
let s_msg = `'${s_prop_name_function}' must be a object property and contain the value of one of ${JSON.stringify(a_s_name_function_exposed)} `
let s_msg_escaped_quotes = s_msg.replace(/"/g, '\\"')
let s_rust = `

use mouse_rs::{types::keys::Keys, Mouse};
use serde::{Deserialize, Serialize};
use std::io::{self, Read};
use serde_json::{json,Result, Value};
use std::time::Duration;

//required sudo apt-get install libxdo-dev
fn main() -> serde_json::Result<()> {
    let mut buffer = String::new();
    let _ = io::stdin().read_to_string(&mut buffer);

    let a_s_name_function_exposed = vec!${JSON.stringify(a_s_name_function_exposed, null, 4)};

    let o_input: Value = serde_json::from_str(&buffer)?;
    // println!("o_input: {:?}", o_input);


    match o_input.get("${s_prop_name_function}") {
        Some(Value::String(${s_prop_name_function})) => {
            if a_s_name_function_exposed.contains(&${s_prop_name_function}.as_str()) {
                // ok

                let o_mouse = Mouse::new();

                ${a_o_rs_function.map(o_rs_function=>{
                    return `
                        if(o_input["${s_prop_name_function}"]== "${o_rs_function.s_name}"){
                            ${(()=>{
                                let a_o_arg_from_arg_expected = o_rs_function.a_o_arg_expected.filter(o=>{
                                    return o.s_name != '&self'
                                }).map(
                                    (o, n_idx)=>{
                                        return f_o_arg_from_arg_expected(
                                            o, 
                                            
                                                `o_input["${o.s_name}"]`
                                            //`o_input["a_v_arg"][${n_idx}]`
                                            )
                                    }
                                )
                                return [
                                    a_o_arg_from_arg_expected.map(o=>`${o.s_rs_init};`).join('\n'),
                                    `let v_result = o_mouse.${o_rs_function.s_name}(${a_o_arg_from_arg_expected.map(o=>o.s_name).join(',\n')});`
                                ].join('\n')

                            })()}

                            ${(()=>{

                                if(o_rs_function.s_name == 'get_position'){
                                    return `

                            let json_v_result = match v_result {
                                Ok(v) => json!({"status": "success", "x": v.x, "y": v.y}),
                                Err(e) => json!({"status": "error", "message": e.to_string()}),
                            };
                            println!("{}", serde_json::to_string(&json_v_result)?);
                        
                            return Ok(())
                            `
                                }else{
                                    return ``
                                }
                            })()}


                        }
                    `
                }).join('\n')}


            } else {
                println!("${s_msg_escaped_quotes}");

            }
        },
        Some(_) => {
            // '${s_prop_name_function}' exists but is not a string
            println!("Error: '${s_prop_name_function}' is not a string.");
        },
        None => {
            // '${s_prop_name_function}' does not exist
            println!("Error: JSON must contain the property '${s_prop_name_function}'.");
        }
    }


    

    Ok(())
}

`
await Deno.writeTextFile('./src/dynamically_generated.rs', s_rust)

let f_s_name_js_function_from_o_rs_function = function(
    o_rs_function
){
    return `f_mousers_${o_rs_function.s_name}`
}

let s_path_binary = `./target/debug/dynamically_generated`
let s_js = `
import {
    f_a_n_u8__stdout__from_node_command
} from "./functions.module.js"
let o_text_encoder = new TextEncoder();
let o_text_decoder = new TextDecoder();
    ${a_o_rs_function.map(o=>{
        let a_o_arg_expected_filtered = o.a_o_arg_expected.filter(o=>o.s_name != '&self');
        return `
        let ${f_s_name_js_function_from_o_rs_function(o)} = async function(
            ${a_o_arg_expected_filtered.map(o2=>{
                return `${o2.s_name}`
            }).join(',\n')}
        ){
            let s_json_param = JSON.stringify(
                {
                    s_name_function: "${o.s_name}", 
                    ${a_o_arg_expected_filtered.map(o2=>{
                        return `${o2.s_name}`
                    }).join(',\n')}
                }
            )
            // console.log(s_json_param)
            let a_n_u8 = o_text_encoder.encode(
                s_json_param
            );
            let a_n_u8_out = await f_a_n_u8__stdout__from_node_command(
                '${s_path_binary}', 
                [], 
                a_n_u8
            )
            if(a_n_u8_out.length > 0){
                return JSON.parse(o_text_decoder.decode(a_n_u8_out.buffer));
            }

        }`
    }).join('\n')}

    let o_s__enum_mouse_rs_dd_types_dd_keys_dd_Keys = {
        ${a_s__enum_mouse_rs_dd_types_dd_keys_dd_Keys.map(s=>{
            return `${s}: "${s}"`
        }).join(',\n')
        }
    }

    export {
        o_s__enum_mouse_rs_dd_types_dd_keys_dd_Keys,
        ${a_o_rs_function.map(o=>f_s_name_js_function_from_o_rs_function(o))}
    }
`;
await Deno.writeTextFile('./dynamically_generated.module.js', s_js);

