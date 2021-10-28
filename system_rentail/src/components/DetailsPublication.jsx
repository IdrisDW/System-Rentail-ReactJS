import * as React from 'react';
import '../styles/details_publication.sass'
import SimpleBackdrop from './SimpleBackdrop'
import CardDetails from './CardDetails'

export default function DetailsPublication(props) {

    const [ publication, setPublication] = React.useState([])
    const [ loading, setLoading ] = React.useState(null);

    React.useEffect(() => {
        const getPublication = async (url) => {
            setLoading(true)
            const request = await fetch(url)
            if (request.status === 200) {
              const jsonRequest = await request.json()
                  setLoading(false)
                  setPublication(jsonRequest)
          } else {
              setLoading(false)
              setPublication([])
          }
        }
    
        getPublication('https://income-system.herokuapp.com/publications/614cdfe151de9100162a0c08')
    
    },[])

    return (
        <div className="details-publication">
            {loading ? <SimpleBackdrop loading={true} />: null}
            {publication.length > 0 ? <CardDetails publication={publication}/> : null}
        </div>
    )
}