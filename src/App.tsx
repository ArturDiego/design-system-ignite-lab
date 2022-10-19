import './styles/global.css';
import { Logo } from './styles/Logo';
import { Heading } from './components/Heading';
import { Text } from './components/text';
import { TextInput } from './components/TextInput';
import { Envelope, Lock } from 'phosphor-react';
import { Checkbox } from './components/Checkbox';
import { Button } from './components/Button';
import { SignIn } from './pages/SignIn';


export function App() {
    return <SignIn />
}
