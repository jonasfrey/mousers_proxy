let f_o_output_from_command = async function(
    s_name_binary, 
    a_v_arg = [],
    a_n_u8__to_be_written_to_stdin, 
){

    let s_command = [s_name_binary, ...a_v_arg].join(' ');
    const o_command = new Deno.Command(
        s_command,
        {
            args: a_v_arg,
            stdin: "piped",
            stdout: "piped",
            stderr: 'piped'
        }
    );
    const o_proc_child = o_command.spawn();
    let o_writer = await (o_proc_child.stdin.getWriter())

    await o_writer.write(a_n_u8__to_be_written_to_stdin);
    await o_writer.close();

    const { code: n_return_code, stdout: a_n_u8__stdout, stderr: a_n_u8__stderr } = await o_proc_child.output();
    return {
        s_command: s_command,
        n_return_code, 
        a_n_u8__stdout, 
        a_n_u8__stderr
    }
}
let o_text_decoder = new TextDecoder();
let f_a_n_u8__stdout__from_node_command = async function(
    s_name_binary, 
    a_v_arg = [],
    a_n_u8__to_be_written_to_stdin,
){

    let o = await f_o_output_from_command(
        s_name_binary, 
        a_v_arg = [],
        a_n_u8__to_be_written_to_stdin
    );
    
    if(o.n_return_code != 0 || o.a_n_u8__stderr.length > 0){
        let s_error = `n_return_code is ${o.n_return_code} from command '${o.s_command}', stderr: '${o_text_decoder.decode(o.a_n_u8__stderr)}'`

        console.error(s_error)
        let s_stderr = o_text_decoder.decode(o.a_n_u8__stderr);

        throw Error(s_stderr)


        throw Error(s_error)
    }
    // console.log(o)
    return o.a_n_u8__stdout;
}
export {
    f_o_output_from_command, 
    f_a_n_u8__stdout__from_node_command
}