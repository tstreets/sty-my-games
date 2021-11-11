import React from 'react';
import { Form, Input } from 'semantic-ui-react';

import FormField from '../components/FormField';

const SearchForm = ({ filters, setFilters }) => {
    function changeFilters(e, { name, value }) {
        if (name === 'minPlayers' || name === 'maxPlayers') {
            if (isNaN(value)) return;
            setFilters({ ...filters, [name]: Number(value) });
        } else {
            setFilters({ ...filters, [name]: value });
        }
    }

    return (
        <React.Fragment>
            <Form style={{ marginBottom: '24px' }}>
                <FormField
                    control={Input}
                    label='Name:'
                    name='name'
                    placeholder='Filter by name:'
                    value={filters.name}
                    onChange={changeFilters}
                />
                <Form.Group widths='equal'>
                    <FormField
                        control={Input}
                        label={`Time Duration (${filters.time}mins):`}
                        name='time'
                        placeholder='Filter by time:'
                        type='range'
                        min={5}
                        max={120}
                        step={5}
                        value={filters.time}
                        onChange={changeFilters}
                    />
                    <FormField
                        control={Input}
                        label={`Recommended Age ${filters.age}+:`}
                        name='age'
                        placeholder='Filter by age:'
                        type='range'
                        min={2}
                        max={19}
                        step={1}
                        value={filters.age}
                        onChange={changeFilters}
                    />
                    <FormField
                        control={Input}
                        label='Min. Players:'
                        name='minPlayers'
                        placeholder='Filter by minimum players:'
                        value={filters.minPlayers}
                        onChange={changeFilters}
                    />
                    <FormField
                        control={Input}
                        label='Max Players:'
                        name='maxPlayers'
                        placeholder='Filter by maximum players:'
                        value={filters.maxPlayers}
                        onChange={changeFilters}
                    />
                </Form.Group>
                <FormField
                    control={Input}
                    label='Company:'
                    name='company'
                    placeholder='Filter by company:'
                    value={filters.company}
                    onChange={changeFilters}
                />
            </Form>
        </React.Fragment>
    );
};

export default SearchForm;
