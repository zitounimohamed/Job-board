import React, { Component } from 'react';
import { Field } from 'redux-form';
import CustumInput from './CustumInput';
import './cv.css'

class cv extends Component {
    render() {
        return (
            <div class='container '>
                <br/><br/><br/><br/>
                <h1>Ajouter un CV</h1>
                <div class="form-group pt-5 ">
                    <label for="exampleFormControlFile1">Example file input</label>
    <               input type="file" class="form-control-file" id="exampleFormControlFile1"/>
                </div>
                <div class='form-group' >
                    <label for="exampleFormControlFile1">Titre de poste désiré</label>
                    <input class="form-control" type="text" placeholder="Default input"></input>
                </div>
                <div class='row'>
                    <div class='col'>
                        <label for="exampleFormControlFile1">Type d'emploi</label>
                        <select class="custom-select mr-sm-2" id="inlineFormCustomSelect">
                            <option selected>Choisir...</option>
                            <option value="1">CDI</option>
                            <option value="2">CD</option>
                            <option value="3">Three</option>
                        </select>
                    </div>
                    <div class='col'>
                        <label for="exampleFormControlFile1">Catégorie</label>
                        <input class="form-control" type="text" placeholder="Default input"></input>
                    </div>
                </div>
                <div class='form-group' >
                    <label for="exampleFormControlFile1">Compétences</label>
                    <textarea class="form-control" type="text" placeholder="Default input"></textarea>
                </div>
                <div class="form-group">
                    <label for="exampleFormControlFile1">Télecharger le CV</label>
    <               input type="file" class="form-control-file" id="exampleFormControlFile1"/>
                </div>
                <div class='form-group'>
                        <label for="exampleFormControlFile1">Telephone</label>
                        <input class="form-control" type="tel" placeholder="Default input"></input>
                </div>
                <div class="form-group">
                    <label for="exampleFormControlFile1">Expérience</label>
                    <select class="custom-select mr-sm-2" id="inlineFormCustomSelect">
                        <option selected>Selectionner votre expérience...</option>
                        <option value="1">Débutant</option>
                        <option value="2">0 à 1 an</option>
                        <option value="3">1 à 2 ans</option>
                        <option value="4">3 ans ou plus</option>

                    </select>
                </div>

                <div class='row'>
                        <button type='submit' class='btn btn-primary ml-10'>Publier</button>
                </div>

            </div>
        );
    }
}

export default cv;