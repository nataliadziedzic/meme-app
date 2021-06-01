import * as React from 'react'
import { StyledPagination } from './Pagination.style'

export interface PaginationProps {
  page: number
  changePage: (currentPage: number) => void
  totalPages: number
}

const Pagination: React.FC<PaginationProps> = ({ page, changePage, totalPages }) => {
  return (
    <StyledPagination
      page={page}
      onChange={(e, currentPage) => changePage(currentPage)}
      count={totalPages}
      shape='rounded'
    />
  )
}

export default Pagination
