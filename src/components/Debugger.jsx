import './debugger.css'

function Debugger({filters}) {
  return (
    <footer>
            <div>
                {JSON.stringify(filters, null, 2)}
            </div>
    </footer>
  )
}

export default Debugger