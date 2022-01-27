import { Box, Text, TextField, Image, Button } from '@skynexui/components';
import React from 'react';
import appConfig from '../config.json';

export default function ChatPage() {

    const [mensagem, setMensagem] = React.useState('');
    const [listaDeMensagens, setListaDeMensagens] = React.useState([]);

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

    function handleNovaMensagem(novaMensagem) {
        // se tornou objeto para pegar múltiplas informações. 
        // a mensagem deixou de ser apenas uma string.
        const mensagem = {
            id: listaDeMensagens.length + 1,
            from: 'developerLuciaH',
            textoMensagem: novaMensagem,
        };
        // chamada de um backend
        setListaDeMensagens([
            mensagem,
            ...listaDeMensagens,            
        ]);
        setMensagem('');
    }

    return (
        //Imagem de fundo mais escura
        <Box
            styleSheet={{
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                backgroundColor: appConfig.theme.colors.primary[500],
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
                    backgroundColor: appConfig.theme.colors.neutrals[700],
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
                        backgroundColor: appConfig.theme.colors.neutrals[600],
                        flexDirection: 'column',
                        borderRadius: '5px',
                        padding: '16px',
                    }}
                >

                    <MessageList mensagens={listaDeMensagens} />

                    {/* {listaDeMensagens.map((mensagemAtual) => {
                        
                        return(
                            <li key={mensagemAtual.id}>
                                {mensagemAtual.from}: {mensagemAtual.textoMensagem} 
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

                            placeholder="Digite aqui a sua mensagem aqui..."
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
                    KikMeinCord
                </Text>
                <Button
                        variant='tertiary'
                        label='Sair'
                        href="/"
                        styleSheet={{
                            borderRadius: '5px',
                            // padding: '8px',
                            backgroundColor: appConfig.theme.colors.transparente.buttonBlack,
                            marginRight: '30px',
                            color: appConfig.theme.colors.neutrals[200],
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
                overflow: 'scroll',
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
                                src={`https://github.com/${mensagem.from}.png`}
                            />

                            <Text tag="strong">
                                {mensagem.from}
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
                        {mensagem.textoMensagem}
                    </Text>

                );
            })}



























        </Box>
    )
}