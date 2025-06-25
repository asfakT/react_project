import React, { useEffect, useState } from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import SearchResult from './SearchResult';

export const BASE_URL = "http://localhost:9000";

const FoodyZone = () => {

    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {

        const fetchFoodData = async () => {
            setLoading(true);

            try {
                const response = await fetch(BASE_URL);

                const json = await response.json();

                console.log("Fetched JSON:", json);
                setData(json);
                setLoading(false);

            } catch (error) {
                setError("Unable to fetch data");
                setLoading(false);
            }
        }
        fetchFoodData();
    }, [])

    if (error) return <div>{error}</div>
    if (loading) return <div>Loading...</div>

    console.log("Data:", data);

    return (
        <><GlobalStyle /><Container>
            <TopContainer>
                <div className='logo'>
                    <img src="/images/Foody Zone.png" alt="foodlogo" />
                </div>
                <div className='search'>
                    <input placeholder='search food' />
                </div>
            </TopContainer>

            <FilterContainer>
                <Button>All</Button>
                <Button>Breakfast</Button>
                <Button>Lunch</Button>
                <Button>Dinner</Button>
            </FilterContainer>

            <SearchResult data={data} />
        </Container></>
    );
};

export default FoodyZone;

const GlobalStyle = createGlobalStyle`
    body{
        background-color: #323334;
        color: white;
        min-height: 100vh;
    }

`

const Container = styled.div`
    background-color: #323334;
    Max-width: 1200px;
    margin : 0 auto;
`;

const TopContainer = styled.section`
    min-height: 140px;
    display: flex;
    justify-content: space-between;
    padding: 16px;
    align-items: center;

    .search {
        input {
            background-color: transparent;
            border: 1px solid red;
            color: white;
            border-redius: 5px;
            height: 40px;
            font-size: 16px;
            padding: 5px;
        }
    }
`;

const FilterContainer = styled.section`
    display: flex;
    justify-content: center;
    gap: 12px;
    padding-bottom: 30px
`;

export const Button = styled.button`
    background: #FF4343;
    border-redius: 5px;
    padding: 6px 12px;
    border: none;
    color: white;
`;





