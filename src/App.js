import styled from 'styled-components'
const Container = styled.div`
    display: flex;
    justify-content: center;
    height: 100%;
    align-items: center;
`
const Section = styled.section`
    background-color: #eee;
    border-top: solid 2px palevioletred;
    padding: 20px 25px;
    width: 500px;
    box-shadow: 0px 2px 5px rgb(0, 0, 0, 0.6);
`
function App() {
    return (
        <Container>
            <Section>weed</Section>
        </Container>
    )
}

export default App
