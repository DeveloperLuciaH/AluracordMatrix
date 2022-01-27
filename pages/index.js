import { Box, Button, Text, TextField, Image } from '@skynexui/components';
import React from 'react';
import {useRouter} from 'next/router';
import appConfig from '../config.json';

//Componente React
//Função recebe um argumento/propriedade
  

function Titulo(props){
    console.log(props);
    const Tag = props.tag;
    return (
        <>
        <Tag>{props.children}</Tag>
            <style jsx>{`
                ${Tag} {
                    color: ${appConfig.theme.colors.neutrals['000']};
                    font-size: 20px;
                    font-weight:600;
                }    
            `}</style>
        </>
    );
}

// function HomePage() {
//     //JSX
//     return (
//         <div>
//             <GlobalStyle /> 
//             <Titulo tag="h2">Bem-vindos de volta!</Titulo>
//             <h2>Discord Alura - Spider</h2>
//         </div>
//     )
// } 
// export default HomePage

export default function PaginaInicial() {
    //const username = 'developerLuciaH';
    const [username, setUsername] = React.useState('');
    const roteamento = useRouter();
          
    return (
      
      <>
      
          <Box
          styleSheet={{
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            //backgroundImage: 'url(/img/AsuiTsuyu.png)',
            backgroundImage: 'url(https://images.hdqwalls.com/wallpapers/peace-of-mind.jpg)',
            backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundBlendMode: 'multiply',
          }}
        >
          <Box
            styleSheet={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexDirection: {
                xs: 'column',
                sm: 'row',
              },
              width: '100%', maxWidth: '500px',
              borderRadius: '5px', padding: '32px', margin: '16px',
              boxShadow: '0 2px 10px 0 rgb(0 0 0 / 20%)',
              backgroundColor: appConfig.theme.colors.transparente.fundo,
            }}
          >
            {/* Formulário */}
            <Box
              as="form"
              onSubmit={function(infosDoEvento){
                infosDoEvento.preventDefault();
                console.log('Usuario submeteu o form');
                roteamento.push('/chat');
              }}
              styleSheet={{
                display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
                width: { xs: '100%', sm: '50%' }, textAlign: 'center', marginBottom: '32px',
              }}
            >
              <Titulo tag="h2">Seja bem-vindo mais uma vez!</Titulo>
              <Text variant="body" styleSheet={{ marginBottom: '32px', color: appConfig.theme.colors.neutrals[200] }}>
                {appConfig.name}
              </Text>

              <TextField
                placeholder="Digite seu usuário"
                value={username}
                onChange={function (event){
                  console.log('usuario digitou', event.target.value);
                  // Onde está o valor?
                  const valor = event.target.value;
                  //Trocar o valor da variável através do React e avise quem precisa
                  setUsername(valor);
                  
                }}              
                fullWidth
                textFieldColors={{
                  neutral: {
                    textColor: appConfig.theme.colors.neutrals[800],
                    mainColor: appConfig.theme.colors.neutrals[900],
                    mainColorHighlight: appConfig.theme.colors.primary[600],
                    backgroundColor: appConfig.theme.colors.neutrals[200],
                  },
                }}
              />

              <Button
                type='submit'
                label='Entrar'
                fullWidth
                buttonColors={{
                  contrastColor: appConfig.theme.colors.neutrals["000"],
                  mainColor: appConfig.theme.colors.primary[950],
                  mainColorLight: appConfig.theme.colors.primary[950],
                  mainColorStrong: appConfig.theme.colors.primary[650],
                }}
              />
            </Box>
            {/* Formulário */}
  
  
            {/* Photo Area */}
            <Box
              styleSheet={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                maxWidth: '200px',
                padding: '15px',
                flex: 1,
                minHeight: '240px',
              }}
            >
              <Image
                styleSheet={{
                  borderRadius: '50%',
                  marginBottom: '16px',
                  //boxShadow: '0 0 5px 0 #fff',
                }}

                src={username.length > 2 ? `https://github.com/${username}.png` : `/img/github.png`}
               
              />              

              <a
                  href={`https://github.com/${username}`}
                  target={'_blank'}
              >    

                <Text
                  variant="body4"
                  styleSheet={{
                    color: appConfig.theme.colors.neutrals[800],
                    fontSize: '16px',  
                    padding: '3px 10px',               
                  }}
              >
                {username}
              </Text>
            </a>

            </Box>
            {/* Photo Area */}
          </Box>
        </Box>
      </>
    );
}
  