import { Box, Text, TextField, Image, Button } from '@skynexui/components';
import React from 'react';
import appConfig from '../config.json';
import { useRouter } from 'next/router';
import { BiSend } from 'react-icons/bi';
import { MdLogout } from 'react-icons/md';
import { BiCool } from "react-icons/bi";
import { ButtonSendSticker } from "../src/components/ButtonSendSticker"
import { createClient } from '@supabase/supabase-js';

const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTY0MzMyNDU2OCwiZXhwIjoxOTU4OTAwNTY4fQ.JymWTWhqavsTnjJG2ZbTaWYrPZAC37mYcAUL1Xo-1Ig';
const SUPABASE_URL = 'https://buuwsykmomaefgmiiluv.supabase.co';
const supabaseClient = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

// Como fazer AJAX
//https://medium.com/@omariosouto/entendendo-como-fazer-ajax-com-a-fetchapi-977ff20da3c6 

// acessa todas as informações cadastrada no banco de dados via console do navegador
// substitui fazer todo o fetch via código na programação

export default function ChatPage() {

    const roteamento = useRouter();
    const usuarioLogado = roteamento.query.username;
    const [mensagem, setMensagem] = React.useState('');
    const [listaDeMensagens, setListaDeMensagens] = React.useState([
        // {
        //     id: 1,
        //     de: 'developerLuciaH',
        //     texto: ':sticker: "https://www.alura.com.br/imersao-react-4/assets/figurinhas/Figurinha_30.png"'
        // }
    ]);

    // ##### LÓGICA - USUÁRIO #####
    // Usuário digita no text area;
    // Aperta Enter para enviar a msg;
    // Tem que adicionar o texto na listagem.

    // ##### LÓGICA - DEV #####
    // Campo criado;
    // Usar onChange e useState;
    // Faz uma condição para quando digitar o Enter limpar a variável, disponibilizar para nova mensagem 
    // e listar as mensagens já digitadas.   

    // ./Final das Lógicas

    // isola o refresh no servidor 
    React.useEffect(() => {
        supabaseClient
            .from('mensagens')
            .select('*')
            .order('id', { ascending: false })
            .then(({ data }) => {
                console.log('Dados da consulta: ', data);
                setListaDeMensagens(data)
            });
    }, [])


    function handleNovaMensagem(novaMensagem) {
        // se tornou objeto para pegar múltiplas informações. 
        // a mensagem deixou de ser apenas uma string.
        const mensagem = {
            // id: listaDeMensagens.length + 1,
            de: usuarioLogado,
            texto: novaMensagem,
        };

        // chamada de um backend
        supabaseClient
            .from('mensagens')
            .insert([
                // Os nomes dos objetos devem ser iguais aos campos do banco de dados
                // criados no supabase
                mensagem
            ])
            .then(({ data }) => {
                console.log('Criando mensagem: ', data);
                setListaDeMensagens([
                    data[0],
                    ...listaDeMensagens,
                ]);
                setMensagem('');
            });
    }

    return (
        //Imagem de fundo mais escura
        <Box
            styleSheet={{
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                //backgroundColor: appConfig.theme.colors.primary[500],
                backgroundImage: 'url(/img/gwen.png)',
                //backgroundImage: 'url(https://images.hdqwalls.com/wallpapers/peace-of-mind.jpg)',
                backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundBlendMode: 'multiply',
                color: appConfig.theme.colors.neutrals['000']
            }}
        >
            <Box
                // Área da tela do chat mais escura
                styleSheet={{
                    display: 'flex',
                    flexDirection: 'column',
                    flex: 1,
                    boxShadow: '0 2px 10px 0 rgb(0 0 0 / 20%)',
                    borderRadius: '5px',
                    backgroundColor: appConfig.theme.colors.transparente.fundo,
                    height: '100%',
                    maxWidth: '95%',
                    maxHeight: '95vh',
                    padding: '32px',
                }}
            >
                {/* Componente do cabeçalho (usando ctrl click em cima do header consegue visualizar toda função) */}
                <Header />
                <Box
                    //Área da tela do chat mais clara
                    styleSheet={{
                        position: 'relative',
                        display: 'flex',
                        flex: 1,
                        height: '80%',
                        //backgroundColor: appConfig.theme.colors.neutrals[600],
                        flexDirection: 'column',
                        borderRadius: '5px',
                        padding: '16px',
                    }}
                >

                    <MessageList mensagens={listaDeMensagens} />

                    {/* {listaDeMensagens.map((mensagemAtual) => {
                        
                        return(
                            <li key={mensagemAtual.id}>
                                {mensagemAtual.de}: {mensagemAtual.texto} 
                            </li>
                        )                       
                    })} */}

                    <Box
                        as="form"
                        styleSheet={{
                            display: 'flex',
                            alignItems: 'center',
                        }}
                    >
                        <TextField
                            value={mensagem}
                            onChange={(event) => {
                                const valor = event.target.value;
                                setMensagem(valor);
                            }}

                            onKeyPress={(event) => {
                                if (event.key === 'Enter') {
                                    event.preventDefault();
                                    handleNovaMensagem(mensagem);
                                }
                            }}

                            placeholder="Digite aqui a sua mensagem ..."
                            type="textarea"
                            styleSheet={{
                                width: '100%',
                                border: '0',
                                resize: 'none',
                                borderRadius: '5px',
                                padding: '6px 8px',
                                backgroundColor: appConfig.theme.colors.transparente.fundo,
                                marginRight: '12px',
                                color: appConfig.theme.colors.neutrals[200],
                            }}
                        />

                        < ButtonSendSticker />

                        <Button
                            variant='tertiary'
                            label={< BiSend />}
                            type='submit'
                            styleSheet={{
                                borderRadius: '5px',
                                backgroundColor: appConfig.theme.colors.transparente.buttonBlack,
                                hover: {
                                    backgroundColor: appConfig.theme.colors.transparente.buttonBlue, 
                                    color:'black'
                                },
                                marginLeft: '1px',
                                padding: '12px 29px',
                                color: appConfig.theme.colors.neutrals[200],
                            }}
                            buttonColors={{
                                mainColorLight: appConfig.theme.colors.transparente.buttonBlue,
                            }}

                            onClick={(event) => {
                                event.preventDefault();
                                if (mensagem.length > 0) {
                                    handleNovaMensagem(mensagem);
                                }
                            }}

                        />
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}

function Header() {
    return (
        <>
            <Box styleSheet={{ width: '100%', marginBottom: '16px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }} >
                <Text variant='heading5'>
                    KikMeinCord {< BiCool />} Chat

                </Text>
                <Button
                    variant='tertiary'
                    label={< MdLogout />}
                    href="/"
                    styleSheet={{
                        borderRadius: '5px',
                        // padding: '8px',
                        backgroundColor: appConfig.theme.colors.transparente.buttonBlack,
                        marginRight: '10px',
                        color: appConfig.theme.colors.neutrals[200],
                        hover: {
                            backgroundColor: appConfig.theme.colors.transparente.buttonBlue, 
                            color:'black'
                        }
                    }}
                    buttonColors={{
                        mainColorLight: appConfig.theme.colors.transparente.buttonBlue,
                    }}
                    

                />
            </Box>
        </>
    )
}

function MessageList(props) {
    console.log(props);
    return (
        <Box
            tag="ul"
            styleSheet={{
                overflowY: 'scroll',
                display: 'flex',
                flexDirection: 'column-reverse',
                flex: 1,
                color: appConfig.theme.colors.neutrals["000"],
                marginBottom: '16px',
            }}
        >
            {props.mensagens.map((mensagem) => {
                return (
                    <Text
                        key={mensagem.id}
                        tag="li"
                        styleSheet={{
                            borderRadius: '5px',
                            padding: '6px',
                            marginBottom: '12px',
                            wordWrap: 'word-brek',
                            hover: {
                                backgroundColor: appConfig.theme.colors.transparente.fundo,
                            }
                        }}
                    >
                        <Box
                            styleSheet={{
                                marginBottom: '8px',
                            }}
                        >
                            <Image
                                styleSheet={{
                                    width: '20px',
                                    height: '20px',
                                    borderRadius: '50%',
                                    display: 'inline-block',
                                    marginRight: '8px',
                                }}
                                src={`https://github.com/${mensagem.de}.png`}
                            />

                            <Text tag="strong">
                                {mensagem.de}
                            </Text>

                            <Text
                                styleSheet={{
                                    fontSize: '10px',
                                    marginLeft: '8px',
                                    color: appConfig.theme.colors.neutrals[300],
                                }}
                                tag="span"
                            >
                                {(new Date().toLocaleDateString())}
                            </Text>
                        </Box>

                        {/* Condição tenária, substituindo um if */}
                        {mensagem.texto.startsWith(':sticker:')
                            ? (
                                <Image src={mensagem.texto.replace(':sticker:', '')} />
                            )
                            : (
                                mensagem.texto
                            )}
                    </Text>

                );
            })}



        </Box>
    )
}