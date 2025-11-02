// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at https://mozilla.org/MPL/2.0/.
//
// This Source Code Form is "Incompatible With Secondary Licenses", as
// defined by the Mozilla Public License, v. 2.0.

import {Text, Flex, Card, Grid, Box, Link as Link} from "@radix-ui/themes";
import './Home.css'
import {Link as ReactLink} from "react-router";

function Home() {
  return (
    <Flex justify="center" align="center" width="100%" height="100vh" className="bg-gradient" direction="column">
      <Grid columns={{ initial: "1", md: "2" }} gap={{ initial: "4", md: "9" }}  maxWidth={{ initial: "80vw", md: "60vw" }} justify="center">
        <ReactLink to="/harmony" className="link">
          <Card size="3" className="card">
            <Flex justify="center" direction="column" gap="6">
              <Text as="p" size="5" align="center">
                Harmony DB
              </Text>
              <Text as="p" size="2" align="center">
                Browse the harmony database and learn about music theory.
              </Text>
            </Flex>
          </Card>
        </ReactLink>
        <ReactLink to="/tonundrum" className="link">
          <Card size="3" className="card">
            <Flex justify="center" direction="column" gap="6">
              <Text as="p" size="5" align="center">
                Tonundrum
              </Text>
              <Text as="p" size="2" align="center">
                Challenge yourself to create music under various constraints.
              </Text>
            </Flex>
          </Card>
        </ReactLink>
      </Grid>
      <Box pt="6rem">
        <Text as="p" size="1" align="center" color="gray">
          All content is available under the <Link href="https://creativecommons.org/publicdomain/zero/1.0/legalcode">Creative Commons CC0 1.0 Universal License</Link>.<br/>
          <Link href="https://github.com/Hime-Sound-Labs" target="_blank">Source code</Link> is licensed separately under <Link href="https://spdx.org/licenses/MPL-2.0-no-copyleft-exception.html">Mozilla Public License 2.0 (no copyleft exception)</Link>.
        </Text>
      </Box>
    </Flex>
  )
}

export default Home
