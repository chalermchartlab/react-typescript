import React, { FC, ChangeEvent, MouseEvent, useState, Dispatch, SetStateAction } from 'react'
import { SeriesProps } from '../interfaces/SeriesProps'

interface Props {
    seriesList: SeriesProps["seriesList"]
    setSeriesList: Dispatch<SetStateAction<SeriesProps["seriesList"]>>
}

const Form: FC<Props> = ({ seriesList, setSeriesList }) => {

    const [name, setName] = useState("")
    const [genre, setGenre] = useState("")
    const [cover, setCover] = useState("")
    const [imdb, setImdb] = useState<SeriesProps | any>(0)
    const [seasons, setSeasons] = useState<SeriesProps | any>(0)

    console.log(name,
        genre,
        cover,
        imdb,
        seasons)


    const setNameinputHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setName(event.target.value)
    }


    const setGenreinputHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setGenre(event.target.value)
    }

    const setCoverinputHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setCover(event.target.value)
    }

    const setImdbinputHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setImdb(event.target.value)
    }

    const setSeasonsinputHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setSeasons(event.target.value)
    }

    const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
        if (!name && !genre && !cover && !imdb && !seasons) {
            alert("Please enter series info!")
            return;
        }

        const seriesData = { name, genre, cover, imdb, seasons }

        setSeriesList([...seriesList, seriesData])
        setName("")
        setGenre("")
        setCover("")
        setImdb(0)
        setSeasons(0)

    }


    return (
        <div>
            <h1>Form</h1>
            <div className='form-container'>

                <div className='form-div'>
                    <label htmlFor="name">Name</label>
                    <input type="text" name='name' value={name} onChange={setNameinputHandler} />
                </div>

                <div className='form-div'>
                    <label htmlFor="genre">genre</label>
                    <input type="text" name='genre' value={genre} onChange={setGenreinputHandler} />
                </div>

                <div className='form-div'>
                    <label htmlFor="cover">cover</label>
                    <input type="text" name='cover' value={cover} onChange={setCoverinputHandler} />
                </div>

                <div className='form-div'>
                    <label htmlFor="imdb">imdb</label>
                    <input type="number" name='imdb' value={imdb} onChange={setImdbinputHandler} />
                </div>

                <div className='form-div'>
                    <label htmlFor="seasons">seasons</label>
                    <input type="number" name='seasons' value={seasons} onChange={setSeasonsinputHandler} />
                </div>

                <button type='button' onClick={handleClick}>Add Series</button>
            </div>
        </div>
    )
}

export default Form