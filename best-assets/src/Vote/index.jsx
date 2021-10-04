import React, {useEffect, useState} from 'react'
import styled from 'styled-components'
import axios  from 'axios'
import QueryString from 'qs';

export const Vote = () => {

    const [voted, setHasVoted] = useState(false);
    const [voteOpen, setVoteOpen] = useState(false);
    const [choice, setChoice] = useState("");
    const [login, setLogin] = useState("");

    const valideVote = () => {
        console.log(login, choice)
        const dataSend = QueryString.stringify({
            'Login': login,
            'Asset': choice
        })
        const config = {
            method: 'post',
            url: 'http://127.0.0.1:3000/vote',
            data : dataSend
          };
          axios(config)
            .then(function (response) {
                setHasVoted(true)
            })
            .catch(function (error) {
                console.log(error.message);
            });
    }

    let AssetsTab = [
        'nakach_v',
        'benazz_n',
        'labern_m',
        'corrie_l',
        'schert_p',
        'puig_a',
        'pharao_y',
        'fernan_d',
        'blanch_g',
        'ravene_v',
        'frikha_a',
        'padova_n',
        'hu_f',
        'ansard_k',
        'herfra_t',
        'jurdan_l',
        'bonnot_n',
        'granie_l',
        'rhoc_k',
        'fresna_a',
        'lav_r',
        'vialle_p',
        'feuvra_v',
    ];

    let last = 0;
    return (
        <Container>
            <TitleBox>
                Best ASSETS AP 2025
            </TitleBox>
            <PicturesContainer>
                    {AssetsTab.map((elem, i) => {
                        if (i % 5 === 0) {
                            return (
                                <PictureLine>
                                    <div style={{display: "flex", justifyContent: "center", flexDirection: "column", alignItems: "center", width: "240px", height: "300px"}}>
                                        <Picture onClick={() => {setChoice(AssetsTab[i]); setVoteOpen(true)}} src={`https://auth.etna-alternance.net/api/users/${AssetsTab[i]}/photo?size=medium`}/>
                                        <Name> {AssetsTab[i]} </Name>
                                    </div>
                                    <div style={{display: "flex", justifyContent: "center", flexDirection: "column", alignItems: "center", width: "240px", height: "300px"}}>
                                        <Picture onClick={() => {setChoice(AssetsTab[i + 1]); setVoteOpen(true)}} src={`https://auth.etna-alternance.net/api/users/${AssetsTab[i + 1]}/photo?size=medium`}/>
                                        <Name> {AssetsTab[i + 1]} </Name>
                                    </div>
                                    <div style={{display: "flex", justifyContent: "center", flexDirection: "column", alignItems: "center", width: "240px", height: "300px"}}>
                                        <Picture onClick={() => {setChoice(AssetsTab[i + 2]); setVoteOpen(true)}} src={`https://auth.etna-alternance.net/api/users/${AssetsTab[i + 2]}/photo?size=medium`}/>
                                        <Name> {AssetsTab[i + 2]} </Name>
                                    </div>
                                    <div style={{display: "flex", justifyContent: "center", flexDirection: "column", alignItems: "center", width: "240px", height: "300px"}}>
                                        <Picture onClick={() => {setChoice(AssetsTab[i + 3]); setVoteOpen(true)}} src={`https://auth.etna-alternance.net/api/users/${AssetsTab[i + 3]}/photo?size=medium`}/>
                                        <Name> {AssetsTab[i + 3]} </Name>
                                    </div>
                                    <div style={{display: "flex", justifyContent: "center", flexDirection: "column", alignItems: "center", width: "240px", height: "300px"}}>
                                        <Picture onClick={() => {setChoice(AssetsTab[i + 4]); setVoteOpen(true)}} src={`https://auth.etna-alternance.net/api/users/${AssetsTab[i + 4]}/photo?size=medium`}/>
                                        <Name> {AssetsTab[i + 4]} </Name>
                                    </div>
                                {voteOpen ?
                                <FormModal>
                                    <CardFormContainer>
                                        <div style={{display: "flex", justifyContent: "center", flexDirection: "column", alignItems: "center", width: "240px", height: "300px"}}>
                                            <Picture src={`https://auth.etna-alternance.net/api/users/${choice}/photo?size=medium`}/>
                                            <Name> {AssetsTab[i + 4]} </Name>
                                        </div>
                                            Pour valider votre choix, merci de rentrer votre login !
                                        <LabelForm > Login </LabelForm>
                                        <InputForm type="string" name="mail" id="string" onChange={(e) => setLogin(e.target.value)} border={login}/>
                                        <Validation onClick={valideVote}>
                                            Valider
                                        </Validation>
                                    </CardFormContainer>
                                </FormModal>: null}
                                </PictureLine>
                            )  
                        }
                    })}
            </PicturesContainer>
        </Container>
    )
}

const Validation = styled.button`
    display: flex;
    margin-top: 20px;
    color: #f57904;
    background-color: black;
    width: 20%;
    height: 30px;
    align-items: center;
    justify-content: center;
    border: none;
    border-radius: 5px;
    font-weight: bold;
    font-size: 20px;
    :hover {
        cursor: pointer;
    }
`

const LabelForm = styled.label`
    display: flex;
    margin-top: 20px;
    font: normal normal medium 14px/30px Poppins;
    letter-spacing: 0px;
    color: black;
`
const InputForm = styled.input`
    display: flex;
    background-color: transparent;
    border: 1px solid black;
    outline: none;
    color: black;
    font: italic normal 300 18px Poppins;
    height: 25px;
    width: 50%;

`;

const CardFormContainer = styled.div`
    display: flex;
    position: relative;
    width: 439px;
    min-height: 50vh;
    flex-direction: column;
    box-shadow: 4px 4px 10px #00000029;
    border-radius: 18px;
    background-color:#f57904 ;
    align-items: center;
    font-weight: bold;
    font-size: 22px;

    @media screen and (max-device-width:480px){
        width: 90%;
        height: 50%;
    }
`

const FormModal = styled.div`
position: absolute;
display: flex;
width: 100vw;
height: 100vh;
top: 0;
left: 0;
justify-content: center;
align-items: center;
z-index: 30;
background: #5C5C5C62 0% 0% no-repeat padding-box;

`

const PictureLine = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    margin-top: 10px;

`
const Name = styled.div`
    display: flex;
    margin-top: 10px;
    font-size: 20px;
    font-style: bold;
    color: #f57904;
`
const Picture  = styled.img`
    width: 200px;
    height: 240px;
    border: 10px solid #f57904;
    :hover {
        cursor: pointer;
        width: 220px;
        height: 260px;
    }
    
`

const PicturesContainer = styled.div`
    display: flex;
    width: 80%;
    background-color: #161515;
    height: 100%;
    margin-top: 100px;
    justify-content: space-between;
    flex-direction: column;
`

const TitleBox = styled.div`
    position: fixed;
    display: flex;
    height: 100px;
    width: 100%;
    justify-content: center;
    align-items: center;
    font-size: 30px;
    font-style: bold;
    background-color: black;
    color: #f57904;

`

const Container = styled.div`
    display: flex;

    width: 100%;
    height: 120%;
    justify-content: center;
    background-color: #161515;
`