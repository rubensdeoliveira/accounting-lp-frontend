import { Box } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { remark } from 'remark'
import html from 'remark-html'
import Highlight from 'react-highlight'

import { MarkdownViewerModel } from './models'
import { markdownViewerStyles } from './styles'

export function MarkdownViewer({ content }: MarkdownViewerModel) {
  const [contentInHtml, setContentInHtml] = useState<string>('')

  useEffect(() => {
    async function remarkContent() {
      const processedContent = await remark().use(html).process(content)
      setContentInHtml(processedContent.toString())
    }
    remarkContent()
  }, [content])

  return (
    <Box __css={markdownViewerStyles}>
      <Highlight innerHTML={true}>{contentInHtml}</Highlight>
    </Box>
  )
}
