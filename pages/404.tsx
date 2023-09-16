import { createStyles, Text, Title, Button, Container, Group, rem } from '@mantine/core'
import Head from 'next/head'
import Link from 'next/link'
  
const ErrorPage = () => {
  const { classes } = useStyles()

  return (
    <Container className={classes.root}>
      <Head>
        <title>Hoogeland: 404</title>
      </Head>
      <div className={classes.label}>404</div>
      <Title className={classes.title}>Je hebt een geheime plek gevonden.</Title>
      <Text color="dimmed" size="lg" align="center" className={classes.description}>
        Helaas is dit slechts een 404 pagina. Mogelijk hebt u het adres verkeerd getypt of heeft de pagina
        zich verplaatst.
      </Text>
      <Group position="center">
        <Link href="/">
          <Button variant="subtle" size="md">
            Breng me terug naar de home pagina
          </Button>
        </Link>
      </Group>
    </Container>
  )
}

const useStyles = createStyles((theme) => ({
  root: {
    paddingTop: rem(80),
    paddingBottom: rem(80),
  },

  label: {
    textAlign: 'center',
    fontWeight: 900,
    fontSize: rem(220),
    lineHeight: 1,
    marginBottom: `calc(${theme.spacing.xl} * 1.5)`,
    color: theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[2],

    [theme.fn.smallerThan('sm')]: {
      fontSize: rem(120),
    },
  },

  title: {
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    textAlign: 'center',
    fontWeight: 900,
    fontSize: rem(38),

    [theme.fn.smallerThan('sm')]: {
      fontSize: rem(32),
    },
  },

  description: {
    maxWidth: rem(500),
    margin: 'auto',
    marginTop: theme.spacing.xl,
    marginBottom: `calc(${theme.spacing.xl} * 1.5)`,
  },
}))

export default ErrorPage