import React, {useEffect, useState} from 'react'
import styled from 'styled-components'

export const Vote = () => {

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
                                    <div style={{display: "flex", justifyContent: "center", flexDirection: "column", alignItems: "center"}}>
                                        <Picture src={`https://auth.etna-alternance.net/api/users/${AssetsTab[i]}/photo?size=medium`}/>
                                        <Name> {AssetsTab[i]} </Name>
                                    </div>
                                    <div style={{display: "flex", justifyContent: "center", flexDirection: "column", alignItems: "center"}}>
                                        <Picture src={`https://auth.etna-alternance.net/api/users/${AssetsTab[i + 1]}/photo?size=medium`}/>
                                        <Name> {AssetsTab[i + 1]} </Name>
                                    </div>
                                    <div style={{display: "flex", justifyContent: "center", flexDirection: "column", alignItems: "center"}}>
                                        <Picture src={`https://auth.etna-alternance.net/api/users/${AssetsTab[i + 2]}/photo?size=medium`}/>
                                        <Name> {AssetsTab[i + 2]} </Name>
                                    </div>
                                    <div style={{display: "flex", justifyContent: "center", flexDirection: "column", alignItems: "center"}}>
                                        <Picture src={`https://auth.etna-alternance.net/api/users/${AssetsTab[i + 3]}/photo?size=medium`}/>
                                        <Name> {AssetsTab[i + 3]} </Name>
                                    </div>
                                    <div style={{display: "flex", justifyContent: "center", flexDirection: "column", alignItems: "center"}}>
                                        <Picture src={`https://auth.etna-alternance.net/api/users/${AssetsTab[i + 4]}/photo?size=medium`}/>
                                        <Name> {AssetsTab[i + 4]} </Name>
                                    </div>
                                </PictureLine>
                            )  
                        }
                    })}
            </PicturesContainer>
        </Container>
    )
}

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
const Picture = styled.img`
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
    height: 100%;
    justify-content: center;
    background-color: #161515;
`