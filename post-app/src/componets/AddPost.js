import React, {Component } from 'react';
import Axios from 'axios';
import './addPost.css'


class AddPost extends Component {

    addPost = (e) => {
        e.preventDefault()
        let newPost = {
            title: this._title.value,
            shortTitle: this._shortTitle.value,
            description: this._description.value,
            imgPath: this._imgPath.value,
            imgDescription: this._imgDescription.value
        }
        if(
            this._title.value !== ''
            && this._shortTitle.value !== ''
            && this._description.value !== ''
            && this._imgPath.value !== ''
            && this._imgDescription.value !== ''
        ) {
            Axios.post('http://ak108.developer-lc.pl/api/ak108/blog_create.php', newPost)
            .then(res =>{
                console.log(res)
            })

        }



}
    

    render(){
        return <div>
          <form onSubmit ={this.addPost}>
            <input ref={(data) => {this._title = data}} placeholder="Tytuł"/>
            <br/>
            <input ref={(data) => {this._shortTitle = data}} placeholder="Krótki opis"/>
            <br/>
            <input ref={(data) => {this._description = data}} placeholder="Opis"/>
            <br/>
            <input ref={(data) => {this._imgPath = data}} placeholder="Zdjęcie"/>
            <br/>
            <input ref={(data) => {this._imgDescription = data}} placeholder="Opis zdjęcia"/>
            <br/>
            <button>Wyślij</button>
            </form>
        </div>
        
    }
}


export default AddPost;