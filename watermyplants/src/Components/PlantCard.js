import React from 'react';
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import axiosWithAuth from '../Util/axiosWithAuth';
import '../custom.css';



const PlantCard = ({ plant, setPlants})  => {

    const { push } = useHistory()


    const deletePlant = (delPlant) => {
        axiosWithAuth()
        .delete(`https://water-my-plants-four.herokuapp.com/plants/${delPlant.id}`)
        .then(res => {
            console.log(res.data)
            return axiosWithAuth().get("https://water-my-plants-four.herokuapp.com/plants")
        })
        .then(res =>{
            setPlants(res.data)
            console.log('Deleted', res)
        })
        .catch(err => {
            console.log("delete function error", err.response)
        })
    };

    // What's this edit
    const editPlant = () => {
        push(`/editplant:${plant.id}`)
    }
  
    return (

        <StyledCard className='styled'>
        <div className='card-container'>
            <div className='card'>
                <div className='img-container'>
                    <img className='img' alt='pic' src={plant.image_url} />
                </div>
                <div className='p-tag'>
                    <p>Nickname: {plant.nickname}</p>
                    <p>Species: {plant.species}</p>
                    <p>H2o Frequency: {plant.h2o_frequency}</p>
                    <button onClick={editPlant}className='btn'>Edit</button>
                    <button onClick={() => deletePlant(plant)} className='btn'>Delete</button>
                </div>
            </div>
        </div>
    </StyledCard>
    );
}

export default PlantCard

const StyledCard = styled.div`
@media(max-width: 1920px){
    
    margin: 0% auto;
        background-color: rgb(228, 253, 225);
        padding: 2.5%;
        display:flex;
        justify-content: center;
  & .btn{
margin: 2% 2%;
padding: 1.5% 4.5% ;
text-align:center;
font-family: arial;
color: white;
background-color: 	rgb(38, 38, 38);
}
& .img-container{
justify-content: center;
width: 100%;
height: 100%;
}
& .card-container{
display:flex;
width:60%;
margin: 0;
justify-content: center;
border: 7.5px groove darkcyan;
background-color: rgb(147, 184, 173);
box-shadow: 10px 5px 5px darkgrey;
}
& .card{
display:flex;
width: 100%;
}
& .img{
width: 520px;
height: 200px;
background-position: 50% 50%;
background-repeat: no-repeat;
background-size: cover;
object-fit:cover;
object-position:center;
}
& .p-tag{
display:flex;
width:100%;
height:40%;
/* border: 2.5px solid red; */
justify-content:center;
margin: 0 auto;
flex-wrap: wrap;
}
p{
display:flex;
justify-content:center;
flex-wrap:wrap;
flex-direction:row;
width:100%;
margin: 2%;
height: 30%;
font-size: 1.2em;
font-family: arial;
color: antiquewhite;
font-weight: unset;
}
}
@media(max-width: 1000px){
        margin: 0% auto;
        background-color: rgb(228, 253, 225);
        padding: 2.5%;
        display:flex;
        justify-content: center;
    & .btn{
        margin: 2% 2%;
        padding: 1.5% 4.5% ;
        text-align:center;
        font-family: arial;
        color: white;
        background-color: 	rgb(38, 38, 38);
        
    }
    & .img-container{
        justify-content: center;
        width: 100%;
        height: 100%;
        
    }
    & .card-container{
        display:flex;
        width:60%;
        margin: 0;
        justify-content: center;
        border: 7.5px groove darkcyan;
        background-color: rgb(147, 184, 173);
        box-shadow: 10px 5px 5px darkgrey;
    }
    & .card{
        display:flex;
        width: 100%;
    }
    & .img{
    width: 250px;
    height: 200px;
    background-position: 50% 50%;
    background-repeat: no-repeat;
    background-size: cover;
    object-fit:cover;
    object-position:center;
        
    }
    & .p-tag{
        display:flex;
        width:100%;
        height:40%;
        /* border: 2.5px solid red; */
        justify-content:center;
        margin: 0 auto;
        flex-wrap: wrap;
    }
    p{
        display:flex;
        justify-content:center;
        flex-wrap:wrap;
        flex-direction:row;
        width:100%;
        margin: 5%;
        height: 30%;
        font-size: 1.2em;
        font-family: arial;
        color: antiquewhite;
        font-weight: unset;
        /* border: 2.5px solid red; */
    }
}
`
