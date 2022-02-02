import { Box, Text, TextField, Image, Button } from '@skynexui/components';
import React from 'react';
import appConfig from '../config.json';
import { useRouter } from 'next/router';
import { BiSend } from 'react-icons/bi';
import { MdLogout } from 'react-icons/md';
import { BiCool } from "react-icons/bi";
import { RiDeleteBinLine } from 'react-icons/ri';
import {ButtonSendSticker} from '../src/components/ButtonSendSticker';
import { createClient } from '@supabase/supabase-js';

const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTY0MzMyNDU2OCwiZXhwIjoxOTU4OTAwNTY4fQ.JymWTWhqavsTnjJG2ZbTaWYrPZAC37mYcAUL1Xo-1Ig';
const SUPABASE_URL = 'https://buuwsykmomaefgmiiluv.supabase.co';
const supabaseClient = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

function escutaMensagemEmTempoReal(adcionaMensagem){
    return supabaseClient
        .from('mensagens')
        .on('INSERT', ( respostaLive  ) =>{
            adcionaMensagem(respostaLive.new);
        })
        .subscribe();
}

export default function ChatPage() {
    const [mensagem, setMensagem] = React.useState('');
    const [listaDeMensagens, setListaMensagens] = React.useState([
        
    ]);
    const roteamento = useRouter();
    const usuarioLogado = roteamento.query.username;

    React.useEffect(()=>{
        supabaseClient
            .from('mensagens')
            .select('*')
            .order('id', { ascending: false})
            .then(( {data})=>{
                console.log('Dados da consulta', data);
                setListaMensagens(data);
            });
            escutaMensagemEmTempoReal((novaMensagem)=>{
                console.log('Nova Mensagem', novaMensagem);
                if(usuarioLogado != novaMensagem.de){
                    let audio = new Audio(appConfig.sound);
                    audio.play();
                }
                setListaMensagens((valorAtualDaLista)=>{
                    return[
                        novaMensagem,
                        ...valorAtualDaLista,
                    ]
                });
            });
    }, []);

    function handleNovaMensagem(novaMensagem) {
        const mensagemEnviada = {
            // id: listaDeMensagens.length + 1,
            de: usuarioLogado,
            texto: novaMensagem,
        };
        
        supabaseClient
            .from('mensagens')
            .insert([
                mensagemEnviada
            ])
            .then(( {data})=>{
                console.log('Criando Mensagem: ', data);
                // setListaMensagens([
                //     data[0],
                //     ...listaDeMensagens,
                // ]);
            })     

        setMensagem('');
    }

    function Header() {
        return (
            <>
                <Box styleSheet={{ width: '100%', display: 'flex',  alignItems: 'center', justifyContent: 'space-between' }} >
                    <Text variant='heading5'>
                         KIK.MEIN { < BiCool />}  CHAT
                    </Text>
                    <Button
                        variant='tertiary'
                        label={< MdLogout size={18}  />}
                        href="/"
                        styleSheet={{
                            borderRadius: '5px',
                            minWidth: '42px',
                            minHeight: '42px',
                            backgroundColor: appConfig.theme.colors.button.buttonBlack,
                            marginRight: '10px',
                            color: appConfig.theme.colors.neutrals[200],
                            hover: {
                                backgroundColor: appConfig.theme.colors.button.buttonBlue,
                                color: 'black'
                            }
                        }}
                        buttonColors={{
                            mainColorLight: appConfig.theme.colors.button.buttonBlue,
                            
                        }}

                    />
                </Box>
            </>
        )
    }


    return (
        //Background Imagem
        <Box
            styleSheet={{
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                backgroundImage: 'url(/img/gwen.png)',
                backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundBlendMode: 'multiply',
                color: appConfig.theme.colors.neutrals['000']
            }}
        >
            
            <Box
            //Background transparente
                styleSheet={{
                    display: 'flex',
                    flexDirection: 'column',
                    flex: 1,
                    boxShadow: '0 2px 10px 0 rgb(0 0 0 / 20%)',
                    borderRadius: '5px',
                    backgroundColor: appConfig.theme.colors.background.fundoBlack1,
                    height: '100%',
                    maxWidth: {
                        md: '70%',
                        sm: '95%',
                        xs: '95%',
                    },
                    maxHeight: '93vh',
                    padding: {
                        md: '40px',
                        sm: '20px',
                        xs: '20px',
                    },
                    padding: '32px',
                }}
            >
                {/* Cabeçalho */ }
                <Header />

                <Box
                    styleSheet={{
                        position: 'relative',
                        display: 'flex',
                        flex: 1,
                        height: '80%',
                        flexDirection: 'column',
                        borderRadius: '5px',
                        padding: '16px',
                    }}
                >

                    <MessageList mensagens={listaDeMensagens} />

                    <Box
                    //Array de Mensagens
                        as="form"
                        styleSheet={{
                            display: 'flex',
                            alignItems: 'center'
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
                                    console.log(event);
                                    handleNovaMensagem(mensagem);
                                }
                            }}

                            placeholder="Digite sua mensagem..."
                            type="textarea"
                            styleSheet={{
                                width: '100%',
                                height: '40px',
                                padding: '10px',
                                resize: 'none',
                                borderRadius: '2px',
                                border: '1px solid #000000',
                                backgroundColor: appConfig.theme.colors.background.fundoBlack1,
                                color: appConfig.theme.colors.neutrals[200]
                            }}
                            
                        />
                        {/* CallBack */}
                        <ButtonSendSticker 
                            onStickerClick={(sticker) => {
                                console.log('Salva esse sticker no banco', sticker);
                                handleNovaMensagem(':sticker: ' + sticker);
                            }}
                        />

                        <Button
                            variant='tertiary'
                            label={< BiSend size={23} />}
                            type='submit'
                            styleSheet={{
                                position: 'absolute',
                                marginBottom: '6px',
                                right: '60px',
                                color: appConfig.theme.colors.neutrals[200],
                            }}
                            buttonColors={{
                                mainColorLight: 'none',
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
  
    //Foto, nome e data das Mensagens
    function MessageList(props) {
        console.log(props);
        return (
            <Box
                tag="ul"
                styleSheet={{
                    overflowY: 'scroll',
                    wordBreak: 'break-word',
                    display: 'flex',
                    flexDirection: 'column-reverse',
                    flex: 1,
                    color: appConfig.theme.colors.neutrals["000"],
                    marginBottom: '1px'
                }}
                
            >
                {props.mensagens.map((mensagem) => {
                    return (
                        //Bloco de mensagens
                        <Text
                            key={mensagem.id}
                            tag="li"
                            styleSheet={{
                                borderRadius: '5px',
                                padding: '6px',
                                marginBottom: '5px',
                                wordWrap: 'word-brek',
                                hover: {
                                    backgroundColor: appConfig.theme.colors.background.fundoBlue,
                                    marginRight: '10px'
                                }
                            }}
                        >
                            <Box
                                styleSheet={{
                                    marginBottom: '3px',
                                    width: '100%', 
                                    marginBottom: '10px', 
                                    display: 'flex', 
                                    alignItems: 'center', 
                                    justifyContent: 'space-between' 
                                }}
                            >
                                <Box>
                                    <Image
                                    //Foto do usuário
                                        styleSheet={{
                                            width: '25px',
                                            height: '25px',
                                            borderRadius: '50%',
                                            display: 'inline-block',
                                            marginRight: '5px'
                                        }}
                                        onError={(event) => {
                                            event.target.src = appConfig.userImageDefault
                                        }}
                                        src={`https://github.com/${mensagem.de}.png`}
                                    />
                                    
                                    <Text tag="strong"
                                    //Nome do usuário
                                    >
                                        {mensagem.de}
                                    </Text>
                                    <Text
                                    //Data da mensagem
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
                                
                            { usuarioLogado === mensagem.de ?
                                <Box
                                    title={`Apagar mensagem`}
                                    styleSheet={{
                                        padding: '2px 15px',
                                        cursor: 'pointer'
                                    }}
                                    onClick={()=>{
                                       
                                        let resposta = confirm('Deseja remover essa mensagem?')
                                        if(resposta === true){
                                                supabaseClient
                                                .from('mensagens')
                                                .delete()
                                                .match({ id: mensagem.id }).then(() =>{
                                                    let indice = listaDeMensagens.indexOf(mensagem);
                                                    //1 parametro: Indice que vou manipular 
                                                    //2 parametro: Quantidade de itens que seram manipulados a partir do primeiro paramentro 
                                                    //3 parametro: Setar oq vc vai colocar no lugar (não obrigatório)
                                                    listaDeMensagens.splice(indice,1)
                                                    //... juntar um objeto/array com o outro
                                                    setListaMensagens([...listaDeMensagens])
                                                })
                                        }
                                    }}
                                >
                                    {<RiDeleteBinLine/>}
                                </Box>
                            : 
                            null }
                            </Box>
                           {/* Declarativo */}
                           {/* {mensagem.texto.startsWith(':sticker:').toString()} */}
                           {mensagem.texto.startsWith(':sticker:') ? 
                               (
                                    <Image src={mensagem.texto.replace(':sticker:', '')}
                                    styleSheet={{
                                        width: '150px',
                                    }}
                                    />
                                ) : (
                                    mensagem.texto
                               )}

                        </Text>
                    );
                })}

            </Box>
        )
    }

}