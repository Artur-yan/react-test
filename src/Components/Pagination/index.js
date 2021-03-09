import React, { useState } from 'react';
import PropTypes from 'prop-types'

import {
  PaginationContent,
  PaginationBtn
} from "./styles";

function Pagination({ onLoadMore, data }) {

  return(
    <PaginationContent>
      {!!data.page &&
        <PaginationBtn onClick={() => {onLoadMore(data.page - 1)}}>
          Preview
        </PaginationBtn>
      }
      {data.page * data.limit < data.total &&
        <PaginationBtn onClick={() => {onLoadMore(data.page + 1)}}>
          Next
        </PaginationBtn>
      }
    </PaginationContent>
  );
};

Pagination.propTypes = {
  data: PropTypes.object.isRequired,
  onLoadMore: PropTypes.func.isRequired
};

export default Pagination
