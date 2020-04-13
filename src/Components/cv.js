import React, { Component } from 'react';
import { Field } from 'redux-form';
import CustumInput from './CustumInput';
import './cv.css'
import { connect} from 'react-redux';
import {  reduxForm} from 'redux-form';
import * as actions from '../actions';
import {compose} from 'redux';

class Cv extends Component {
    constructor(props){
        super(props);
        this.onSubmit = this.onSubmit.bind(this);
    
    }
   
    
    async onSubmit(formData){
		await this.props.newcv(formData);

    }
    render() {
        const {handleSubmit}=this.props;

        return (
        <div>
            <br/><br/><br/><br/>
                <figure><h1>Ajouter un CV</h1></figure>
            <div class='container '>
                <form onSubmit={handleSubmit(this.onSubmit)}>
                <div class="form-group pt-5 ">
                    <label for="exampleFormControlFile1">Example file input</label>
                    <input type="file" class="form-control-file" id="exampleFormControlFile1" name="photo"/>
                </div>
                <div class='form-group' >
                    <label for="exampleFormControlFile1">Titre de poste désiré</label>
                    <input class="form-control" type="text" placeholder="Default input" name="titre" id="titre" ></input>
                </div>
                <div class='row'>
                    <div class='col'>
                        <label for="exampleFormControlFile1">Type d'emploi</label>
                        <select class="custom-select mr-sm-2" id="inlineFormCustomSelect" name="type">
                            <option selected>Choisir...</option>
                            <option value="1">CDI</option>
                            <option value="2">CD</option>
                            <option value="3">Three</option>
                        </select>
                    </div>
                    <div class='col'>
                        <label for="exampleFormControlFile1">Catégorie</label>
                        <input class="form-control" type="text" placeholder="Default input" name="categ"></input>
                    </div>
                </div>
                <div class='form-group' >
                    <label for="exampleFormControlFile1">Compétences</label>
                    <textarea class="form-control" type="text" placeholder="Default input" name="comp"></textarea>
                </div>
                <div class="form-group">
                    <label for="exampleFormControlFile1">Télecharger le CV</label>
    <               input type="file" class="form-control-file" id="exampleFormControlFile1" name="cv"/>
                </div>
                <div class='form-group'>
                        <label for="exampleFormControlFile1">Telephone</label>
                        <input class="form-control" type="tel" placeholder="Default input"></input>
                </div>
                <div class="form-group">
                    <label for="exampleFormControlFile1">Expérience</label>
                    <select class="custom-select mr-sm-2" id="inlineFormCustomSelect" name="exp">
                        <option selected>Selectionner votre expérience...</option>
                        <option value="1">Débutant</option>
                        <option value="2">0 à 1 an</option>
                        <option value="3">1 à 2 ans</option>
                        <option value="4">3 ans ou plus</option>

                    </select>
                </div>

                <div class='row'>
                        <button type='submit' class='btn btn-primary center-block' id='but'>Publier</button>
                </div>
                </form>
            </div>
        </div>
        );
    }
}

export default compose (
    connect(null,actions),
            reduxForm({form : 'cv'}))(Cv)