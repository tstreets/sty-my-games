import React from 'react';
import 'semantic-ui-css/semantic.css';
import { Container, Grid, Header, Icon, Segment } from 'semantic-ui-react';

import '../../css/styles.css';
import Navbar from '../../components/Navbar';

const Stats = ({ location: { state } }) => {
    let dropArea = null;

    function changeDropTarget(e) {
        if (dropArea !== e.currentTarget) {
            dropArea = e.currentTarget;
        }
    }

    function dropIcon(e) {
        if (!dropArea) return;
        const clone = e.currentTarget.cloneNode(true);
        clone.onDragEnd = dropCloneIcon;
        dropArea.appendChild(clone);
    }

    function dropCloneIcon(e) {
        if (!dropArea) return;
        dropArea.appendChild(e.currentTarget);
    }

    return (
        <React.Fragment>
            <Container className='fullsite'>
                <Header className='page-header' as='h1'>
                    Stats
                </Header>
                <Icon
                    name='x'
                    size='huge'
                    draggable={true}
                    onDragEnd={dropIcon}
                />
                <Icon
                    name='circle'
                    size='huge'
                    draggable={true}
                    onDragEnd={dropIcon}
                />
                <Grid columns={3}>
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9].map(i => {
                        return (
                            <React.Fragment key={`square-${i}`}>
                                <Grid.Column>
                                    <Segment
                                        style={{
                                            width: '100px',
                                            height: '100px',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            backgroundColor: 'lightcoral',
                                        }}
                                        onDragOver={changeDropTarget}
                                    ></Segment>
                                </Grid.Column>
                            </React.Fragment>
                        );
                    })}
                </Grid>
                <Navbar className='mt-auto' state={state} />
            </Container>
        </React.Fragment>
    );
};

export default Stats;
