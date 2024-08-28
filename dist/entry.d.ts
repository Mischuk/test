import { Open } from './types';
import './assets/fonts.css';
declare class SignWidget {
    private mountPoints;
    private nodeId;
    private onClose;
    constructor(nodeId: string, options?: {
        onClose?: (event: string) => void;
    });
    open(openParams: Open): void;
    close(): void;
}
export { SignWidget };
