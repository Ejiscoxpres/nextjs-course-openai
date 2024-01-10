
const DrinksLayout = ({children}) => {
  return (
    <div className="max-w-xl">
        <div className="mockup-code mb-8">
            <pre data-prefix="$">
                <code>We deal on various assorted drinks and recipes</code>

            </pre>

        </div>
        {children}

    </div>
  )
}

export default DrinksLayout