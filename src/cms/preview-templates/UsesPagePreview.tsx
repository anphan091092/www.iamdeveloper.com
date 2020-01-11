import React from 'react';
import { UsesPageTemplate } from '../../templates/uses-page';
import { PagePreviewProps } from './page-preview-props';

export type UsesPagePreviewProps = PagePreviewProps;

export const ThanksPagePreview: React.FC<UsesPagePreviewProps> = ({
    entry,
    widgetFor,
}) => (
    <UsesPageTemplate
        title={entry.getIn(['data', 'title'])}
        content={widgetFor('body')}
    />
);

ThanksPagePreview.displayName = 'ThanksPagePreview';
