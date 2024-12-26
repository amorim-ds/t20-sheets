import { ClipLoader } from "react-spinners";
import Card from "../molecules/card";
import { Span } from "../atoms/text/span";
import classNames from "classnames";

interface LoaderProps {
    isVisible: boolean;
}

const Loader = ({ isVisible }: LoaderProps) => (
    <Card className={classNames("fixed bottom-3 right-3 shadow-lg flex items-center gap-3", {
        'hidden': !isVisible
    })}>
        <ClipLoader size='1rem' color="#b22222" />
        <Span>Salvando...</Span>
    </Card>
)

export default Loader;