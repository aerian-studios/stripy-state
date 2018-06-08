import * as React from "react";

import * as styles from "./Sfc.scss";

interface Props {
    style?: React.CSSProperties;
}

export const Sfc: React.SFC<Props> = ({ children, style }) => (
    <div className={styles.base} style={style}>
        {children}
    </div>
);
export default Sfc;
