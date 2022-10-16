import './styles/global.css';
import { Logo } from './styles/Logo';
import { Heading } from './components/Heading';
import { Text } from './components/text';
import { TextInput } from './components/TextInput';
import { Envelope, Lock } from 'phosphor-react';
import { Checkbox } from './components/Checkbox';
import { Button } from './components/Button';

export function App() {
    return (
        <div className="flex-col w-screen h-screen bg-bgcolor flex items-center justify-center text-safron-500">
            <header className="flex flex-col items-center">
                <Logo />

                <Heading size="lg" className="mt-4 text-safron-500">
                    Artur Ignite #NeverStopLearning
                </Heading>

                <Text size="lg" className="text-safron-400 mt-2">
                    Faça login e comece a decolar!
                </Text>
            </header>

            <form className="gap-4 flex flex-col items-stretch w-full max-w-[400px] mt-10">
                <label htmlFor="email" className="flex flex-col gap-3">
                    <Text className="font-semibold text-cyan-300">
                        Endereço de e-mail
                    </Text>
                    <TextInput.Root>
                        <TextInput.Icon>
                            <Envelope />
                        </TextInput.Icon>
                        <TextInput.Input
                            type="email"
                            id="email"
                            placeholder="Digite seu e-mail"
                        />
                    </TextInput.Root>
                </label>

                <label htmlFor="password" className="flex flex-col gap-3">
                    <Text className="font-semibold text-cyan-300">
                        Sua senha
                    </Text>
                    <TextInput.Root>
                        <TextInput.Icon>
                            <Lock />
                        </TextInput.Icon>
                        <TextInput.Input
                            type="password"
                            placeholder="*********"
                        />
                    </TextInput.Root>
                </label>

                <label htmlFor="remember" className="flex items-center gap-2">
                    <Checkbox id="remember" />
                    <Text size="sm" className="text-cyan-300">
                        Lembrar de mim por 30 dias
                    </Text>
                </label>

                <Button type="submit" className="mt-4">
                    Entrar na Plataforma
                </Button>
            </form>

            <footer className="flex flex-col items-center gap-4 mt-8">
                <Text asChild size="sm">
                    <a href="" className="text-safron-400 underline hover:text-safron-500">
                        Esqueceu sua senha?
                    </a>
                </Text>
                <Text asChild size="sm">
                    <a href="" className="text-safron-400 underline hover:text-safron-500">
                        Não possui conta? Crie uma agora!
                    </a>
                </Text>
            </footer>
        </div>
    );
}
