import React from 'react';

import Pencil from '@strapi/icons/Pencil';
import Trash from '@strapi/icons/Trash';
import { Box } from '@strapi/design-system/Box';
import { Flex } from '@strapi/design-system/Flex';
import { Tr, Td } from '@strapi/design-system/Table';
import { Typography } from '@strapi/design-system/Typography';
import { IconButton } from '@strapi/design-system/IconButton';
import { useSelector } from 'react-redux';

const CustomRow = ({ openModal, entry }) => {
  const contentTypes = useSelector((store) => store.getIn(['sitemap', 'contentTypes'], {}));

  const handleEditClick = (e) => {
    openModal(entry.name, entry.langcode);
    e.stopPropagation();
  };

  const handleDeleteClick = (e) => {
    entry.onDelete(entry.name, entry.langcode);
    e.stopPropagation();
  };

  return (
    <Tr key={entry.id}>
      <Td>
        <Typography variant="omega" textColor="neutral800">{contentTypes[entry.name] && contentTypes[entry.name].displayName}</Typography>
      </Td>
      <Td>
        <Typography variant="omega" textColor="neutral800">{entry.langcode === 'und' ? 'N/A' : entry.langcode}</Typography>
      </Td>
      <Td>
        <Typography variant="omega" textColor="neutral800">{entry.pattern}</Typography>
      </Td>
      <Td>
        <Flex>
          <IconButton onClick={handleEditClick} label="Edit" noBorder icon={<Pencil />} />
          <Box paddingLeft={1}>
            <IconButton onClick={handleDeleteClick} label="Delete" noBorder icon={<Trash />} />
          </Box>
        </Flex>
      </Td>
    </Tr>
  );
};

export default CustomRow;
