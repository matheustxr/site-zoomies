import { useState, useEffect } from 'react';

import { Link } from 'react-router-dom';

import logo from '../../../assets/images/logoZoomies.webp'
import mapa from '../../../assets/images/banners/bannerEncontrar.webp'

interface Local {
    estado: string;
    cidades: {
      [cidade: string]: {
        localizacoes: string;
      };
    };
}

export default function Encontrar(){

    const  locais:Local[] = [
        {
            estado:"Amazonas",
            cidades: {
                "Manaus" : {
                    localizacoes:"https://www.google.com/maps/d/u/2/embed?mid=1Z7KYTmOr2vSHDaqAvL0AOvUnldk7zn0&ehbc=2E312F"
                }
            }
        },
        
        {
            "estado": "Bahia",
            "cidades": {
                /*
                "Barreiras": {
                    localizacoes: ""
                },*/
                "Lauro de Freitas": {
                    localizacoes: "https://www.google.com/maps/d/u/2/embed?mid=1GmCH7vBaKytC1L9Qh6s3UOIMAoWBL-A&ehbc=2E312F"
                }
            }
        },

        {
            "estado": "Minas Gerais",
            "cidades": {
                /*
                "Belo Horizonte": {
                    localizacoes: "url de localização",
                },
                "Bocauva": {
                    localizacoes: "url de localização"
                },
                */
                "Brasilia de Minas": {
                    localizacoes: "https://www.google.com/maps/d/u/2/embed?mid=1vlLTtuOxx7c_kGOvKowmQa_wUpAJXpA&ehbc=2E312F"
                },
                "Cataguases": {
                    localizacoes: "https://www.google.com/maps/d/u/2/embed?mid=12mK0a05uZNL-Px0KnUpCxKOxdHr3Qx0&ehbc=2E312F"
                },
                "Janauba": {
                    localizacoes: "https://www.google.com/maps/d/u/2/embed?mid=1mmnGPOVAcldhbo4Y9sezRTCLr9Q2Fm8&ehbc=2E312F"
                },
                "Januaria": {
                    localizacoes: "https://www.google.com/maps/d/u/2/embed?mid=1rkY68bKd8DY204hhrqng5skYowbxJ1M&ehbc=2E312F"
                },
                "Juiz de Fora": {
                    localizacoes: "https://www.google.com/maps/d/u/2/embed?mid=151jqB07yVKs5--PDNG-5C2-1uo7Q-aI&ehbc=2E312F"
                },
                "Lambari": {
                    localizacoes: "https://www.google.com/maps/d/u/2/embed?mid=1sHImnnGPH5PjfqLXK9w3uen2Z2Sg9ng&ehbc=2E312F"
                },
                "Martinho de Campos": {
                    localizacoes: "https://www.google.com/maps/d/u/2/embed?mid=1Ta0gAHS5_jOdTO6bJMdmrx8nfE1LHyI&ehbc=2E312F"
                },
                "Montes Claros": {
                    localizacoes: "https://www.google.com/maps/d/u/2/embed?mid=1b9WEL17uokIjw41Wrz3sgXXMMRWlqQc&ehbc=2E312F"
                },
                "Ouro Preto": {
                    localizacoes: "https://www.google.com/maps/d/u/2/embed?mid=18KJAtI_yt9eSh-i1GXezcJkXoGwKcXM&ehbc=2E312F"
                },
                "Para de Minas": {
                    localizacoes: "https://www.google.com/maps/d/u/2/embed?mid=191-9t7rP8cn8pxG8BuXtDnFzlSKCt94&ehbc=2E312F"
                },
                "Patos de Minas": {
                    localizacoes: "https://www.google.com/maps/d/u/2/embed?mid=1nk5KzUve73zIIuAG1t94Jpp956bn2Rs&ehbc=2E312"
                },
                "Pirapora": {
                    localizacoes: "https://www.google.com/maps/d/u/2/embed?mid=1I8eJpwbMNik7WbmZ-VN0_3TBsq8_UJM&ehbc=2E312F"
                },
                /*
                "Poços de Caldas": {
                    localizacoes: "url de localização"
                },
                */
                "Ponte Nova": {
                    localizacoes: "https://www.google.com/maps/d/u/2/embed?mid=1pNkJgd3xIi4nritfFnMj7sgb6iOdhgg&ehbc=2E312F"
                },
                "Santa Luzia": {
                    localizacoes: "https://www.google.com/maps/d/u/2/embed?mid=1rHQ2YHkJ7RUH-VxoWSixy5LMQuo8aXA&ehbc=2E312F"
                },
                "São Gonçalo do Sapucai": {
                    localizacoes: "https://www.google.com/maps/d/u/2/embed?mid=1-gA9f7JnPGNYCYaTf2WdooXmPaYUWCY&ehbc=2E312F"
                },
                "Três Corações": {
                    localizacoes: "https://www.google.com/maps/d/u/2/embed?mid=1-gW4u93Gtltu0z1L1ER3NJzlcdRWiSU&ehbc=2E312F"
                },
                "Uberaba": {
                    localizacoes: "https://www.google.com/maps/d/u/2/embed?mid=1ptBB4E2EMNLVOmnPdzBeW8aYIImHaoQ&ehbc=2E312F"
                },
                "Uberlândia": {
                    localizacoes: "https://www.google.com/maps/d/u/2/embed?mid=1RjCQuT9TJ0ddfYuDl7toff62hs4zG0Q&ehbc=2E312F"
                },
                /*
                "Unai": {
                    localizacoes: "url de localização"
                },
                */
                "Visconde do Rio Branco": {
                    localizacoes: "https://www.google.com/maps/d/u/2/embed?mid=1DsiLRoLyCzQf1TAt4r99iZ7n-bAermY&ehbc=2E312F"
                }
            }
        },
        /*
        {
            "estado": "Paraná",
            "cidades": {
                "Curitiba": {
                    localizacoes: "url de localização",
                }
            }
        },
        */
        {
            "estado": "Rio Grande do Sul",
            "cidades": {
                /*
                "Eldourado do Sul": {
                    localizacoes: "url de localização"
                },
                */
                "Porto Alegre": {
                    localizacoes: "https://www.google.com/maps/d/u/2/embed?mid=1W-ENlTMivZki-wiN4xes_HQpWSrexf0&ehbc=2E312F",
                },
                "Viamão": {
                    localizacoes: "https://www.google.com/maps/d/u/2/embed?mid=1Mp6eOu5rHB6lN8kdBuG7-svMIOKlWTw&ehbc=2E312F"
                }
            }
        },

        {
            "estado": "Santa Catarina",
            "cidades": {
                "Gaspar": {
                    localizacoes: "https://www.google.com/maps/d/u/2/embed?mid=1EGE0y9yiXa6VEKzzpe0j1v05aI_tK00&ehbc=2E312F"
                }
            }
        },

        {
            "estado": "São Paulo",
            "cidades": {
                "Águas de Lindoia": {
                    localizacoes: "https://www.google.com/maps/d/u/2/embed?mid=1upAH94iYyHsKhBVQPUqOYaK5HEF8krU&ehbc=2E312F"
                },
                "Amparo": {
                    localizacoes: "https://www.google.com/maps/d/u/2/embed?mid=1fqpKQPNhwiKpUI2nRcimm3GGUWkxmvQ&ehbc=2E312F",
                },
                /*
                "CAMPINAS": {
                    localizacoes: "url de localização",
                },*/
                "CARAPICUIBA": {
                    localizacoes: "https://www.google.com/maps/d/u/2/embed?mid=1MyKrs6RSbDJCShizywAuf2d41x4GE-4&ehbc=2E312F"
                },
                "EMBU DAS ARTES": {
                    localizacoes: "https://www.google.com/maps/d/u/2/embed?mid=1k5ZPjb8-qXwzkruFg7V3ckY5WziCbC0&ehbc=2E312F"
                },
                /*
                "INDAIATUBA": {
                    localizacoes: "url de localização"
                },
                */
                "ITAI": {
                    localizacoes: "https://www.google.com/maps/d/u/2/embed?mid=1I1w8EzV781V6--5NP5dH5e0M7HDR-RM&ehbc=2E312F"
                },
                "JUNDIAI": {
                    localizacoes: "https://www.google.com/maps/d/u/2/embed?mid=1UIrZ4VAZBX_HezN8MqPcA0uVSTAkJBM&ehbc=2E312F"
                },
                "PRAIA GRANDE": {
                    localizacoes: "https://www.google.com/maps/d/u/2/embed?mid=1ml28eLV4IDi5J_2VZ7zPViwPjrEnjIA&ehbc=2E312F"
                },
                /*
                "PRESIDENTE PRUDENTE": {
                    localizacoes: "url de localização"
                },
                */
                "SAO CARLOS": {
                    localizacoes: "https://www.google.com/maps/d/u/2/embed?mid=1piF-es9ZroL_ee0RrqXsOZYaGt9arIc&ehbc=2E312F"
                },
                /*
                "SAO PAULO": {
                    localizacoes: "url de localização",
                },
                "SAO ROQUE": {
                    localizacoes: "url de localização"
                },
                "SUMARE": {
                    localizacoes: "url de localização"
                },
                */
                "VINHEDO": {
                    localizacoes: "https://www.google.com/maps/d/u/2/embed?mid=1PgVXCf1CdSpZEccE81HVtYIEEY08JTI&ehbc=2E312F",
                }
            }
        }
    ]

    

    const [estadoSelecionado, setEstadoSelecionado] =useState<string>('');
    const [cidadeSelecionada, setCidadeSelecionada] = useState('');
    const [localizacaoUrl, setLocalizacaoUrl] = useState('');

    const cidadesDoEstadoSelecionado = estadoSelecionado
    ? Object.keys(locais.find((local) => local.estado === estadoSelecionado)?.cidades || {})
    : [];

    useEffect(() => {
        // Atualizar a URL da localização quando a cidade for alterada
        if (estadoSelecionado && cidadeSelecionada) {
          const local = locais.find((local) => local.estado === estadoSelecionado)?.cidades?.[cidadeSelecionada];
          if (local) {
            setLocalizacaoUrl(local.localizacoes);
          }
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [estadoSelecionado, cidadeSelecionada]);

    const handleEstadoChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const novoEstadoSelecionado = e.target.value;
        setEstadoSelecionado(novoEstadoSelecionado);
        // Limpar a cidade selecionada quando o estado é alterado
        setCidadeSelecionada('');
    };

    const handleCidadeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const novaCidadeSelecionada = e.target.value;
        setCidadeSelecionada(novaCidadeSelecionada);
    };

    return (
        <>
            {/*BANNER*/}
            <div className='relative'>
                <div className="xl:h-auto lg:pt-[104px] bg-[#0089cb] ">
                    
                    <Link to='/'>
                        <img src={logo} alt="url de localização" className='max-w-[400px] w-[80%] mx-auto py-10 lg:hidden' />
                    </Link>
                    <div className='max-w-[1276px] lg:px-5 mx-auto w-full flex flex-col-reverse lg:flex-row-reverse justify-center items-center'>
                        <div className='max-w-[500px] px-5 lg:px-0 pb-5'>
                            <h1 className='text-5xl lg:text-6xl xl:text-7xl font-bold text-center lg:text-start text-white '>
                                Onde Encontrar?
                            </h1>
                            <p className="text-lg text-[#fff] text-center lg:text-start mt-7">
                                Saiba onde encontrar os produtos da marca mais deliciosa do Brasil!
                            </p>

                            {/*<Link to="/produtos" className='w-auto underline text-xl text-white font-semibold'>
                                <button className=' py-3 px-10 mt-5 rounded-2xl bg-red-600 hover:bg-[#04083a] transition-all'>
                                    {botao}
                                </button>
                            </Link>*/}
                        </div>

                        <div className="w-full max-w-2xl " >
                            <img src={mapa} alt="" />
                        </div>
                        
                    </div>
                </div>
                
            </div>

            <section className='mt-10 max-w-[1276px] mx-auto px-5 flex flex-col lg:flex-row gap-10'>
                <div className='flex flex-col gap-7 items-center max-w-[600px] '>
                    <div className='bg-faixa w-full flex items-center justify-center h-[70px]'>
                        <h1 className='text-4xl lg:text-6xl flex items-center justify-center text-white'>
                            Encontre aqui:
                        </h1>
                    </div>
                    <div className='w-full'>
                        <p>
                            Aqui você poderá encontrar os pontos de vendas Zoomies que estão distribuídos pelo Brasil! Selecione os campos para encontrar o ponto mais próximo de você:
                        </p>
                    </div>

                    <div className='w-full flex flex-col gap-5 px-5'>
                        <div>

                        
                        <label htmlFor="estado">Selecione um estado:</label>
                            {/* Select para escolher o estado */}
                            <select 
                                value={estadoSelecionado} 
                                onChange={handleEstadoChange}
                                className='p-1 bg-gray-300 rounded'
                            >
                                <option value="" disabled>
                                Selecione um estado:
                                </option>
                                {locais.map((local) => (
                                <option key={local.estado} value={local.estado}>
                                    {local.estado}
                                </option>
                                ))}
                            </select>
                        </div>
                        
                        <div>
                            <label htmlFor="cidade">Selecione uma cidade:</label>
                            {/* Select para escolher a cidade com base no estado selecionado */}
                            <select 
                                value={cidadeSelecionada} 
                                onChange={handleCidadeChange} 
                                disabled={!estadoSelecionado}
                                className='p-1 bg-gray-300 rounded'
                            >
                                <option value="" disabled>
                                Selecione uma cidade:
                                </option>
                                {cidadesDoEstadoSelecionado.map((cidade) => (
                                <option key={cidade} value={cidade}>
                                    {cidade}
                                </option>
                                ))}
                            </select>
                        </div>
                    </div>
                </div>

                
                <div className='mx-auto w-full h-[300px] md:h-[400px] lg:h-[300px]  '>
                    <iframe 
                        src={localizacaoUrl}
                        className='w-full h-full'
                    />
                </div>
            </section>
        </>
    )
}