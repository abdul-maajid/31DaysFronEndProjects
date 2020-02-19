import React from 'react';

const TimelineItem = ({ data }) => (
    <div className='timeline-item'>
        <div className='timeline-item-content'>
            <span className='tag' style={{ background: data.category.color }}>
                { data.category.tag }
            </span>
            <time>{ data.date }</time>
            <p>{ data.text }</p>
            {data.links && (
                <a href='{data.links.url}' target='_blank' rel='noopener noreferrer'>
                    {data.links.text}
                </a>
            )}
            <span className='circle'></span>
        </div>
    </div>
);

export default TimelineItem;