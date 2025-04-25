import { Badge } from './ui/badge'

interface StatusProps {
  statusText: string
}

const Status = ({ statusText }: StatusProps) => {
  return (
    <>
      {statusText === 'Em estoque' ? (
        <Badge variant="outline" className="bg-emerald-500 select-none">
          Em estoque
        </Badge>
      ) : (
        <Badge variant="outline" className="bg-red-500 select-none">
          Repor
        </Badge>
      )}
    </>
  )
}

export { Status }
