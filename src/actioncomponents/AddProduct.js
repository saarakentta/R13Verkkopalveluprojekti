import React, { useState } from 'react'
import '../App.css'
import axios from 'axios'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import InputGroup from 'react-bootstrap/InputGroup'
import InputGroupText from 'react-bootstrap/esm/InputGroupText'

function AddProduct() {

    const [merkki, setMerkki] = useState('')
    const [malli, setMalli] = useState('')
    const [korimalli, setKorimalli] = useState('')
    const [hinta, setHinta] = useState('')
    const [kayttovoima, setKayttovoima] = useState('')
    const [image_url, setImage_url] = useState('')
    const [vari, setVari] = useState('')

    function handleSubmit(e) {
        e.preventDefault()

        const data = {
            merkki: merkki,
            malli: malli,
            korimalli: korimalli,
            hinta: hinta,
            kayttovoima: kayttovoima,
            image_url: image_url,
            vari: vari
        }

        axios.post('http://localhost:3001/products', data)
            .then((res) => {

                setMerkki('')
                setMalli('')
                setKorimalli('')
                setHinta('')
                setKayttovoima('')
                setVari('')
                setImage_url('')
            })
            .catch((error) => {
                console.log(error)
            })
    }

    return (
        <div className='ms-5 mb-5'>
            <h1 className='mb-5'>Lisää tuote</h1>
                <Form onSubmit={handleSubmit} className='mb-3'>
                    <Form.Group className='mb-2'>
                        <InputGroup size="lg" className="mb-2">
                            <InputGroup.Text className='inputText' id="inputGroup-sizing-default">
                            Merkki:
                            </InputGroup.Text>
                            <Form.Control value={merkki} onChange={(e) => setMerkki(e.target.value)} size='lg' type="text" required
                            isValid={merkki.length > 0}
                            isInvalid={merkki.length === 0} />
                            <Form.Control.Feedback type='invalid'>
                            </Form.Control.Feedback>
                        </InputGroup>
                    </Form.Group>

                    <Form.Group className='mb-2'>
                        <InputGroup size="lg" className="mb-2">
                            <InputGroup.Text className='inputText' id="inputGroup-sizing-default">
                            Malli:
                            </InputGroup.Text>
                            <Form.Control value={malli} onChange={(e) => setMalli(e.target.value)} size='lg' type="text" required
                            isValid={malli.length > 0}
                            isInvalid={malli.length === 0} />
                            <Form.Control.Feedback type='invalid'>
                            </Form.Control.Feedback>
                        </InputGroup>
                    </Form.Group>

                    <Form.Group className='mb-2'>
                        <InputGroup size="lg" className="mb-2">
                            <InputGroup.Text className='inputText' id="inputGroup-sizing-default">
                            Korimalli:
                            </InputGroup.Text>
                            <Form.Control value={korimalli} onChange={(e) => setKorimalli(e.target.value)} size='lg' type="text" required
                            isValid={korimalli.length > 0}
                            isInvalid={korimalli.length === 0} />
                            <Form.Control.Feedback type='invalid'>
                            </Form.Control.Feedback>
                        </InputGroup>
                    </Form.Group>

                    <Form.Group className='mb-2'>
                        <InputGroup size="lg" className="mb-2">
                            <InputGroup.Text className='inputText' id="inputGroup-sizing-default">
                            Hinta:
                            </InputGroup.Text>
                            <Form.Control value={hinta} onChange={(e) => setHinta(e.target.value)} size='lg' type='number' inputMode='numberic' required
                            isValid={hinta.length > 0}
                            isInvalid={hinta.length === 0} />
                            <InputGroupText>€</InputGroupText>
                        </InputGroup>
                    </Form.Group>

                    <Form.Group className='mb-2'>
                        <InputGroup size="lg" className="mb-2">
                            <InputGroup.Text className='inputText' id="inputGroup-sizing-default">
                            Käyttövoima:
                            </InputGroup.Text>
                            <Form.Control value={kayttovoima} onChange={(e) => setKayttovoima(e.target.value)} size='lg' type="text" required
                            isValid={kayttovoima.length > 0}
                            isInvalid={kayttovoima.length === 0} />
                        </InputGroup>
                    </Form.Group>

                    <Form.Group className='mb-2'>
                        <InputGroup size="lg" className="mb-2">
                            <InputGroup.Text className='inputText' id="inputGroup-sizing-default">
                            Väri:
                            </InputGroup.Text>
                            <Form.Control value={vari} onChange={(e) => setVari(e.target.value)} size='lg' type="text" required
                            isValid={vari.length > 0}
                            isInvalid={vari.length === 0} />
                        </InputGroup>
                    </Form.Group>

                    <Form.Group className='mb-2'>
                        <InputGroup size="lg" className="mb-2">
                            <InputGroup.Text className='inputText' id="inputGroup-sizing-default">
                            Image URL:
                            </InputGroup.Text>
                            <Form.Control value={image_url} onChange={(e) => setImage_url(e.target.value)} size='lg' type="text" />
                        </InputGroup>
                    </Form.Group>

                    <Button type='submit' className='btn btn-secondary btn-lg w-100 mb-3'>Lisää tuote</Button>

                </Form>
        </div>
      )
    }

    export default AddProduct